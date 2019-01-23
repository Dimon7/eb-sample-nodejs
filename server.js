// server.js
const express = require('express');
const app = express();
const db = "mongodb://admin:admin@127.0.0.1:27017/sample-test";
const mongoose = require("mongoose");
mongoose.connect(db).then(() => console.log(`Connected to ${db}...`));

app.get('/', (req, res) => {
    res.send('GTA san andreas elastic beanstalk!!!');
});


app.listen(3000, () => {
    console.log('Server is up on 3000')
});
