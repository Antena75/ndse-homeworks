const Book = require('../classes/Book')

const stor = {
    books: [
        new Book(
            title = "Понедельник начинается в субботу", 
            description = "Класическое фэнтези",
            authors = "Братья Стругацкие",
            favorite = true,
            fileCover = "Monday Begins on Saturday.jpg",
            fileName = "Monday Begins on Saturday.pdf",
            fileBook = "" ),
        new Book(
            title = "Охота на овец", 
            description = "Роман не про овец",
            authors = "Харуки Мураками",
            favorite = true,
            fileCover = "A Wild Sheep Chase.jpg",
            fileName = "A Wild Sheep Chase.pdf",
            fileBook = "" ),       
    ],
}

module.exports = stor