const translate = require('./server/translator')
const vocab = require('./server/Dictionary')
const express = require('express')
const app = express()
const PORT = 3000
const PATH = './server/user_data'
let dict = new vocab.Dictionary('Default', undefined, PATH)

// завантажуємо сторінку
app.use(express.static(__dirname))
app.use(express.json())
app.use(express.urlencoded( {extended: false}))

app.get('/translate', (req, res) => {
    translate.to_uk(req.query.text)
        .then(_ => res.send(_))
        .catch(_ => res.send(_))
})

app.get('/list_dict', (req, res) => {
    res.send(JSON.stringify({
        list_dict : vocab.list_dictionaries(PATH)
    }))
})

app.post('/add_dict', (req, res) => {
    dict = new vocab.Dictionary(req.body.name, req.body.dict, PATH)
    res.send('все ок')
})

app.post('/add_word', (req, res) => {
    dict.add_word(req.body)
    res.send('все ок')
})

app.post('/del_word', (req, res) => {
    dict.del_word()
    res.send('все ок')
})


app.post('/choose_dict', (req, res) => {
    dict = new vocab.Dictionary(req.body.name)
    res.send('все ок')
})

app.get('/get_word', (req, res) => {
    res.send(JSON.stringify(dict.next()))
})

app.get('/get_active_word', (req, res) => {
    res.send(JSON.stringify(dict.get_active_word()))
})

app.listen(PORT, () => {
    console.log(`Сервер стартував на http://localhost:${PORT}/`)
})



