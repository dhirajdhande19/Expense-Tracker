const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)

.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));



app.get("/", (req, res) => {
    res.send("you  have done it");
});


app.listen(3000, () => {
    console.log('Server running on port 3000');
});
