
const express = require('express')
const app = express()
const mongoose =require('mongoose')
const dotenv=require("dotenv")
const cors=require('cors')
const path = require("path");
// const port = 3000
dotenv.config()
app.use(cors())
app.use(express.json())
app.set("views", path.join(__dirname, "views"));
const PORT=process.env.PORT||3000
const URI=process.env.mongostore
const bookRoute =require('./routes/book.route.js')
const userRoute =require('./routes/user.route.js')

// connect to mongodb

try{

mongoose.connect(URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
console.log("connected to mongoDB")

}
catch(e){
    console.log("error haii",e)
}

// routes define
app.use('/book',bookRoute)
app.use('/',userRoute)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})