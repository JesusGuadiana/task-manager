require("../src/db/mongoose");
const Task = require("../src/models/task");

const _id = "5d01b805657fcb1dbce3ea49";

// Task.findByIdAndDelete(_id).then((task) => {
//     return Task.countDocuments({completed: false});
// }).then((result) => {
//     console.log(result);
// }).catch((e) => {
//     console.log(e);
// })

const deleteTaskAndCount = async (id) => {
    const deletedTask = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({completed: false})

    return count;
}

deleteTaskAndCount(_id).then((count) => {
    console.log(count);
}).catch((e) => {
    console.log(e);
})