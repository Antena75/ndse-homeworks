const express = require('express')
const router = express.Router()
const fileMulter = require('../middleware/file')

router.post('/upload', 
    fileMulter.single('book'),
    (req, res) => {
        if (req.file){
            const {path} = req.file
            res.json({path})
        }
        else {
            res.json("404 | Файл не найден. Проверьте расширение загружаемого файла")
        }            
        res.json()
})

module.exports = router