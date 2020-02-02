const mongoose = require("mongoose");

var User = mongoose.model("user", {
    fullname: { type: String, required: true},
    email: {type: String, required: true, unique: true},
    dob: { type: Date, required: true}
});

//export default User;
 module.exports = User;
