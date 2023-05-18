// Package Import
const express = require('express');
const path = require('path');
const fileupload = require('express-fileupload');

// Set initial path
let initial_path = path.join(__dirname, "public");

// Set static path and enable file upload
const app = express();
app.use(express.static(initial_path));
app.use(fileupload());

// send home html and use port 3000(used by default by http servers)
app.get('/', (req, res) => {
    res.sendFile(path.join(initial_path, "html/Home.html"));
})

app.listen("3000", () => {
    console.log('listening......');
})

app.get('/editor', (req, res) => {
    res.sendFile(path.join(initial_path, "html/editor.html"));
})