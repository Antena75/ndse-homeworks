const express = require('express')

const userRouter = require('./routes/user')
const booksRouter = require('./routes/books')
const uploadRouter = require('./routes/upload')

const app = express()
app.use(express.json())   

app.use('/api', userRouter)
app.use('/api', booksRouter)
app.use('/api', uploadRouter)
app.use('/public', express.static(__dirname+'/public'))

const PORT = process.env.PORT || 3000
app.listen(PORT)