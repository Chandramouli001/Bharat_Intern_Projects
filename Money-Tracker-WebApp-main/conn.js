const mongoose = require('mongoose')
require('dotenv').config()
const connectDb = () =>{
    mongoose.connect('mongodb://localhost:27017').then(()=>{
        console.log("Database connected")
    }).catch((err)=>{
        console.log(err)
    })
}

module.exports = connectDb