var Books = require('../models/Books.model');
var {v4 : uuidv4}=require('uuid')
//get All books
module.exports.getBooks=(req,res)=>{
    Books.find({},(err,data)=>{
        if(!err){
            res.status(200).send(data);
        }
        else{
            res.status(404).send({message:"Books not found"})
        }
    })
}

//get book based on bookid
module.exports.getBook=(req,res)=>{
    Books.findOne({bookid:req.params.id},(err,data)=>{
        if(data !== null){
            res.status(200).send(data);
        }
        else if(data === null){
            res.status(404).send({message:`Book not found for bookid ${req.params.id} `});
        }
        else{
            throw err;
        }
    })
    
}

//add book
module.exports.addBook=(req,res)=>{
    let book = new Books({
        bookid:uuidv4(),
        title:req.body.title,
        author:req.body.author
    });
    book.save((err) => {
        if (!err) {
            res.status(201).send({ message: "Book added successfully" });
        } else {
            console.log(err)
        }
    });

}

//update a book
 module.exports.updateBook=(req,res)=>{
    Books.updateOne({bookid:req.params.id}, { 
        title:req.body.title,
        author: req.body.author }
        , (err, data)=> {
                    if (err){
                        console.log(err)
                           }
                    else{
                      console.log("Updated User : ", data);
                      res.status(201).send({ message: "Book updated successfully" });
                    }
    })
}

//delete a book
 module.exports.deleteBook=(req,res)=>{
    Books.deleteOne({bookid:req.params.id},(err, data)=> {
                    if (err){
                        console.log(err)
                           }
                    else{
                       res.status(201).send({ message: "Book deleted successfully" });
                    }
    })
 }