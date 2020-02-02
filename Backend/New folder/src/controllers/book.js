const book= require("../models/book");
const express = require("express");
const router = require("express").Router();


router.get("/", (req,res) => {
    res.send("hello from books");
});

router.get("/:isbn", (req, res) => {
    const i = req.params.isbn;
    console.log(i);
    book.find({ isbn:i })
     .then(book => {
         console.log(book);
         if (book) {
             return res.send(book);
         } else {
             return res.status(404).send ({data : [] });
         }
     })
     .catch (err => {
         return res.status(500).send ({ state:"fail"});

     });
});

router.post("/", (req,res) =>{
    //storing json body in a variable
    var incomingData = req.body;
    console.log(incomingData);
    var a = new Book({
        isbn: incomingData["isbn"],
        title: incomingData["title"],
        author: incomingData["author"],

    });
    a.save(function(err, book){
        if(err) {
            console.log(err);
            res.status(400);
            return res.send({state: "Fail"});
        }

        return res.send ({state : "success"});

    });
});

router.put("/:abc",(req,res)=> {
    book.update({ isbn: req.params.abc }, req.body)
    .then(status => {
        book.findOne ({ isbn: req.params.abc})
         .then(book => {
             res.send(book);
         });
    })
    .catch (err => {
        res.status(500).send ({ state: "fail"});

    });
   // res.send (`updating book ${req.params.i}`); 
});

router.delete("/:isbn", (req,res) => {
    res.send("deleting book with isbn " + req.params.isbn);
});




module.exports = router;