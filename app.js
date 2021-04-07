const express = require('express')
const app = express()
const PORT = 8000

app.set('view engine', 'pug')

// local host 8000
app.get('/', (re, res) => {
    res.render('home')

})


app.listen(PORT, (err) => {
    if (err) throw err

    console.log(`The app started its work on ${PORT}`)
})