// CRUD
// ///Users/jisus/mongodb/bin/mongod.exe --dbpath=/Users/jisus/mongodb-data

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const ObjectID = mongodb.ObjectID;

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";


MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if(error){
        return console.log("Unable to connect to database");
    }

    const db = client.db(databaseName);


    //------------------------------- CREATE DATA ----------------------------------------------------------------------------------------

    // db.collection("users").insertOne({
    //     name: "Victor",
    //     age: 29
    // }, (error, result) => {
    //     if(error){
    //         return console.log("Unable to insert user");
    //     }

    //     console.log(result.ops);
    // });

    // db.collection("users").insertMany([
    //     {
    //         name: "Oscar",
    //         age: 27
    //     }, {
    //         name: "Idilio",
    //         age: 83
    //     }
    // ], (error, result) => {
    //     if(error){
    //         return console.log("Unable to insert documents");
    //     }
        
    // console.log(result.ops);
    // })

    // db.collection("tasks").insertMany([
    //     {
    //         description: "Hacer tarea",
    //         completed: true
    //     }, {
    //         description: "Estudiar",
    //         completed: false
    //     }, {
    //         description: "Hacer ejercicio",
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if(error){
    //         return console.log("Unable to insert tasks");
    //     }

    //     console.log(result.ops);
    // });

    // --------------------------------------------------- READ DATA --------------------------------------------------------

    // db.collection("users").findOne({age: 25}, (error, user) => {
    //     if(error){
    //         return console.log("Unable to fetch");
    //     }

    //     console.log(user);
    // });

    // db.collection("users").find({age: 27}).toArray((error, users) => {
    //     console.log(users);
    // })

    // db.collection("tasks").findOne({_id: new ObjectID("5d0182eb985dd73d1c4c75da")}, (error, task) => {
    //     if(error){
    //         return console.log(error);
    //     }
    //     console.log(task);
    // });

    // db.collection("tasks").find({completed: false}).toArray((error, tasks) => {
    //     if(error){
    //         return console.log("Unable to get tasks");
    //     }
    //     console.log(tasks);
    // })

    //-------------------------------------- UPDATE DATA -------------------------------------------------------------

    // db.collection("users").updateOne({
    //      _id: new ObjectID("5d018b8b8c8bb94dacae6551")
    //  }, {
    //      $inc: {
    //          age: 1
    //      }
    //  }).then((result) => {
    //      console.log(result)
    //  }).catch((e) => {
    //      console.log(e);
    //  });

    // db.collection("tasks").updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed:true
    //     }
    // }).then((result) => {
    //     console.log(result);
    // }).catch((e) => {
    //     console.log(e);
    // });

    //---------------------------------- DELETE DATA ----------------------------------------------------------------

    // db.collection("users").deleteMany({age: 27}).then((result) => {
    //     console.log(result)
    // }).catch((e) => {
    //     console.log(e);
    // });

    // db.collection("tasks").deleteOne({description: "Hacer ejercicio"}).then((result) => {
    //     console.log(result);
    // }).catch((e) => {
    //     console.log(e);
    // });
})
