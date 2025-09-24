const express = require('express')
const { v4: uuid } = require('uuid')

class Book{

    constructor(title = "", description = "", authors = "", favorite = "", fileCover = "", fileName = "", id = uuid()){
        this.title = title
        this.description = description
        this.authors = authors
        this.favorite = favorite
        this.fileCover = fileCover
        this.fileName = fileName
        this.id = id
    }
}   

const stor = {
    books: [
        new Book(
            title = "Понедельник начинается в субботу", 
            description = "Класическое фэнтези",
            authors = "Братья Стругацкие",
            favorite = "+1001",
            fileCover = "Monday Begins on Saturday.jpg",
            fileName = "Monday Begins on Saturday.pdf" ),
        new Book(
            title = "Охота на овец", 
            description = "Роман не про овец",
            authors = "Харуки Мураками",
            favorite = "+1000",
            fileCover = "A Wild Sheep Chase.jpg",
            fileName = "A Wild Sheep Chase.pdf" )
    ],
};
   
const app = express()
app.use(express.json())   

app.post('/api/user/login', (req, res) => {
    const user = { id: 1, mail: "test@mail.ru" }
    res.status(201)
    res.json(user)
})

app.get('/api/books', (req, res) => {
    const {books} = stor
    res.status(200)
    res.json(books)
})

app.get('/api/books/:id', (req, res) => {
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

app.post('/api/books', (req, res) => {
    console.log(req.body)
    const {title, description, authors, favorite, fileCover, fileName} = req.body
    const newBook = new Book(title, description, authors, favorite, fileCover, fileName)
    const {books} = stor
    books.push(newBook)

    res.status(201)
    res.json(newBook)
})

app.put('/api/books/:id', (req, res) => {
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

app.delete('/api/books/:id', (req, res) => {
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

const PORT = process.env.PORT || 3000
app.listen(PORT)