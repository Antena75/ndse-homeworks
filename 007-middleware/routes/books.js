const express = require('express')
const router = express.Router()
const fs = require('fs');
const path = require('path');
const stor = require('../storage/storage')
const Book = require('../classes/Book')

router.get('/books', (req, res) => {
    const {books} = stor
    res.status(200)
    res.json(books)
}) 

router.get('/books/:id', (req, res) => {
    const {books} = stor
    const {id} = req.params
    const idx = books.findIndex( el => el.id === id)

    if (idx !== -1){
        res.status(200)
        res.json(books[idx])
    }
    else{
        res.status(404)
        res.json("Книга не найдена")
    }
})

router.post('/books', (req, res) => {
    const {title, description, authors, favorite, fileCover, fileName, fileBook} = req.body
    const newBook = new Book(title, description, authors, favorite, fileCover, fileName, fileBook)
    const {books} = stor

    books.push(newBook)  
    res.status(201)
    res.json(newBook)
})

router.put('/books/:id', (req, res) => {
    const {books} = stor
    const {id} = req.params
    const idx = books.findIndex( el => el.id === id)

    if (idx !== -1){
        const {title, description, authors, favorite, fileCover, fileName} = req.body
        books[idx].title = title
        books[idx].description = description
        books[idx].authors = authors
        books[idx].favorite = favorite
        books[idx].fileCover = fileCover
        books[idx].fileName = fileName
 
        res.status(200)
        res.json(books[idx])
    }
    else{
        res.status(404)
        res.json("Книга не найдена")
    }    
})

router.delete('/books/:id', (req, res) => {
    const {books} = stor
    const {id} = req.params
    const idx = books.findIndex( el => el.id === id)

    if (idx !== -1){
        books.splice(idx, 1)
        res.status(200)
        res.json("ok")
    }
    else{
        res.status(404)
        res.json("Книга не найдена") 
    }    
})   

module.exports = router