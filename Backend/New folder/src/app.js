const express= require('express');
const app = express();
const mongoose = require("mongoose");
const UserController = require("./controllers/user");
const BookController = require("./controllers/book");


app.use(express.json());

mongoose.connect("mongodb+srv://crampete:crampete123@cluster1-davf0.mongodb.net/Library?retryWrites=true&w=majority", {useNewUrlParser: true});

app.use("/user", UserController);
app.use("/book", BookController);
app.use("/", BookController);
app.listen (5000, () => {
    console.log("server started");
});