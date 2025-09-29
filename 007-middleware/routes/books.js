const express = require('express')
const router = express.Router()
const stor = require('../library/books')
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
        const {title, description, authors, favorite, fileCover, fileName, fileBook} = req.body
        books[idx] = {
            ...books[idx],
            title,
            description,
            authors,
            favorite,
            ileCover,
            fileName,
            fileBook
        }
 
        res.status(200)
        res.json(books[idx])
    }
    else{
        res.status(404)
        res.json("404 | Книга не найдена")
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
        res.json("404 | Книга не найдена") 
    }    
})   

module.exports = router