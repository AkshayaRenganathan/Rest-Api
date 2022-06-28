const express=require('express')
const router =express.Router()

const bookController =require('../controller/Books.controller')
const bookModel =require('../models/Books.model')

router.get('/',bookController.getBooks)
router.get('/:id',bookController.getBook)
router.post('/addbook',bookController.addBook)
router.put('/updatebook/:id',bookController.updateBook)
router.delete('/deletebook/:id',bookController.deleteBook)

module.exports=router