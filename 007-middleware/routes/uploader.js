const express = require('express')
const router = express.Router()
const fileMulter = require('../middleware/file')
const stor = require('../storage/storage')
const Book = require('../classes/Book')

router.post('/upload', 
    fileMulter.single('book'),
    (req, res) => {
        if (req.file){
            const newBook = new Book(
                title = req.file.originalname,
                description = req.file.originalname,
                authors = req.file.originalname,
                favorite = true,
                fileCover = req.file.originalname,
                fileName = req.file.originalname,
                fileBook = req.file.path)
        
            const {books} = stor
            books.push(newBook)

            const {path} = req.file
            res.json({path})
        }
        else {
            res.json("404 | Файл не найден. Проверьте расширение загружаемого файла")
        }            
        res.json()
})

module.exports = router