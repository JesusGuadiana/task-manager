const express = require("express");
const router = new express.Router();
const Task = require("../models/task");
const auth = require("../middleware/auth");

router.post("/tasks", auth, async (req, res) => {
    const task = new Task({
        ...req.body,
        author: req.user._id
    })

    try{
        await task.save();
        res.status(201).send(task);
    } catch(e){
        res.status(400).send(e);
    }
});

router.get("/tasks", auth,  async (req, res) => {
    try{
        const tasks = await Task.find({author: req.user._id});
        res.send(tasks);
    } catch(e) {
        res.status(500).send();
    }
});

router.get("/tasks/:id", auth, async (req, res) => {
    const _id = req.params.id;
    try{
        const task = await Task.findOne({_id, author: req.user._id});
        if(!task){
            return res.status(404).send();
        }
        res.send(task);
    } catch(e) {
        res.status(500).send();
    }
})

router.patch("/tasks/:id", auth, async(req, res) => {
    const _id = req.params.id;
    const updates = Object.keys(req.body);
    const allowedUpdates = ["description", "completed"];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if(!isValidOperation){
        return res.status(400).send({error: "Invalid updates"});
    }
    try{
        const task = await Task.findOne({_id, author: req.user._id});
        
        if(!task){
            return res.status(400).send();
        }
        updates.forEach((update) => task[update] = req.body[update]);
        await task.save();
        res.send(task);
    } catch(e){
        res.status(404).send(e);
    }
})

router.delete("/tasks/:id", auth, async(req, res) => {
    const _id = req.params.id;

    try{
        const deletedTask = await Task.findOneAndDelete({_id, author: req.user._id});
        if(!deletedTask){
            return res.status(404).send();
        }
        res.send(deletedTask);
    } catch(e) {
        res.status(400).send();
    }
})

module.exports = router;