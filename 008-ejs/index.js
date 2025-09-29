const express = require('express')

const errorMiddleware = require('./middleware/error');
const indexRouter = require('./routes/index')
const booksRouter = require('./routes/books')

const app = express()
app.use(express.json())   
app.use(express.urlencoded())
app.set('view engine', 'ejs')

app.use('/', indexRouter)
app.use('/', booksRouter)
app.use(errorMiddleware)

const PORT = process.env.PORT || 3000
app.listen(PORT)