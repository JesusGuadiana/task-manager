require("../src/db/mongoose");
const User = require("../src/models/user");

const _id = "5d01b9c8d903921d500aa372";

// User.findByIdAndUpdate(_id, { age: 1}).then((user) => {
//     console.log(user);  
//     return User.countDocuments({age: 1});
// }).then((count) => {
//     console.log(count);
// }).catch((e) => {
//     console.log(e);
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {age});
    const count = await User.countDocuments({age});

    return count;
}

updateAgeAndCount(_id, 85).then((count) => {
    console.log(count);
}).catch((e) => {
    console.log(e);
})


