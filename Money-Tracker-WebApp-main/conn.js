const mongoose = require('mongoose')
require('dotenv').config()
const connectDb = () =>{
    mongoose.connect("mongodb+srv://chandramouli:mongopass@cluster0.ovqwbwh.mongodb.net/").then(()=>{
        console.log("Database connected")
    }).catch((err)=>{
        console.log(err)
    })
}

module.exports = connectDb
