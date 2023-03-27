const express = require("express");
const dotenv = require("dotenv")
const {chats} = require("./data/data")
const connectDB = require("./config/db")
const colors = require("colors")
const userRouter=require('./router/userRouter')

dotenv.config();
connectDB();
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/user',userRouter)

app.get('/',(req,res)=>{
    res.send("API is Running")
})

const PORT = process.env.PORT || 5000

app.listen(PORT,console.log(`Server Started on PORT ${PORT}`.yellow.bold))