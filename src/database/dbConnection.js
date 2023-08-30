const mongoose = require('mongoose')
const dotenv = require('dotenv').config();

const DB = {}
const API_URL = process.env.API_URL

DB.connect = () => {
    mongoose.connect(API_URL)
    .then(() => {
        console.log("db connected succesfully");
    })
    .catch((e) => console.error(e))
}

module.exports = DB 