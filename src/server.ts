import express = require('express')
import path = require('path')

const app: express.Application = express()
const port = process.env.PORT

console.log('MAKING A CHANGE HERE.')

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build/')))
    app.get(/.*/, (req, res) => { res.sendFile(__dirname + 'client/build/index.html') })
}

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'))
// })

app.get('/', (req, res) => {
    console.log('receiving...')
    res.send('hello world')
})

app.listen(port, () => {
    console.log('server is up on port', port)
})