const express = require("express");
require('dotenv').config();
const PORT = process.env.PORT || 8081;
const nodemailer = require('nodemailer');

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to Auto response Application");
});

app.

app.listen(PORT,() => {
    console.log(`Server listening on port ${PORT}`);
})
