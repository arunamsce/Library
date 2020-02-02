const mongoose= require('mongoose')

var schema = new mongoose.Schema({
    isbn: {type: String, required: true, unique:true},
    title: {type: String, required: true},
    author: {type: String, required: true},

 });
  var book = mongoose.model("book", schema);
  //export default Book;
  module.exports= book;
