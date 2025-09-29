const express = require('express')
const router = express.Router()
module.exports = router
const stor = require('../library/books')
const Book = require('../classes/Book')

router.get('/books', (req, res) => {
    const {books} = stor

    res.render("books/index", {
        title: "Список книг",
        books: books,
    });    
}) 

router.get('/books/create', (req, res) => {
    res.render("books/create", {
        title: "Добавление книги",
        book: {}
    })
})

router.post('/books/create', (req, res) => {
    const {title, description, authors, favorite, fileCover, fileName, fileBook} = req.body
    const newBook = new Book(title, description, authors, favorite, fileCover, fileName, fileBook)

    const {books} = stor
    books.push(newBook)
    
    res.redirect('/books')
})

router.get('/books/:id', (req, res) => {
    const {books} = stor
    const {id} = req.params
    const idx = books.findIndex( el => el.id === id)

    if (idx === -1)
        res.redirect('/404')
        
    res.render("books/view", {
        title: "Карточка книги",
        book: books[idx]
    })
})

router.get('/books/update/:id', (req, res) => {
    const {books} = stor
    const {id} = req.params
    const idx = books.findIndex( el => el.id === id)

    if (idx === -1)
        res.redirect('/404');

    res.render("books/update", {
        title: "Редактирование книги",
        book: books[idx],
    })
})

router.post('/books/update/:id', (req, res) => {
    const {books} = stor
    const {id} = req.params
    const idx = books.findIndex( el => el.id === id)

    if (idx === -1)
        res.redirect('/404')

    const {title, description, authors, favorite, fileCover, fileName, fileBook} = req.body
    books[idx] = {
        ...books[idx],
        title,
        description,
        authors,
        favorite,
        fileCover,
        fileName,
        fileBook
    }
    res.redirect(`/books/${id}`);
})

router.post('/books/delete/:id', (req, res) => {
    const {books} = stor
    const {id} = req.params
    const idx = books.findIndex( el => el.id === id)

    if (idx === -1)
        res.redirect('/404');

    books.splice(idx, 1)
    res.redirect(`/books`);    
})   
