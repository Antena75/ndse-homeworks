const Book = require('../classes/Book')

const stor = {
    books: [
        new Book(
            title = "Понедельник начинается в субботу", 
            description = "Класическое фэнтези",
            authors = "Братья Стругацкие",
            favorite = true,
            fileCover = "Monday Begins on Saturday.jpg",
            fileName = "Monday Begins on Saturday.jpg",
            fileBook = "/public/books/Monday Begins on Saturday.jpg"),
        new Book(
            title = "Охота на овец", 
            description = "Роман не про овец",
            authors = "Харуки Мураками",
            favorite = true,
            fileCover = "A Wild Sheep Chase.jpg",
            fileName = "A Wild Sheep Chase.jpg",
            fileBook = "/public/books/A Wild Sheep Chase.jpg"),       
    ],
}

module.exports = stor