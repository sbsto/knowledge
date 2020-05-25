"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var app = express();
var port = process.env.PORT;
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build/')));
    app.get(/.*/, function (req, res) { res.sendFile(__dirname + 'client/build/index.html'); });
}
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'))
// })
app.get('/', function (req, res) {
    console.log('receiving...');
    res.send('hello world');
});
app.listen(port, function () {
    console.log('server is up on port', port);
});
