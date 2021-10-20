import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

// ! why would you need a .js here?
import postRoutes from './routes/posts.js';

const app = express()
// *we are setting up the body parser to send our requests
app.use(bodyParser.json({limit:'30mb', exteneded:true}))
app.use(bodyParser.urlencoded({limit:'30mb', exteneded:true}))
app.use(cors())

// *what we have done here is we have set up every route aka postRoutes will start with '/posts'
    // * /posts; we setup all the routes inside of this post
    // *hence we should see then .... localhost:5000/posts to all the routes in post.js
    app.use('/posts', postRoutes);

// *we will connect our server application with a real data base aka mongoDB

const CONNECTION_URL='mongodb+srv://mrYellow123:PoopShit123@cluster0.imzng.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, {useNewUrlParser:true, useUnifiedTopology:true})
    // * if connection is succesfful
    .then(()=> app.listen(PORT, ()=> console.log(`Server Running on Port: http://localhost:${PORT}`)))
    // *if connection is unnsuccessful
    .catch((error)=> console.log(`${error} did not connct`))
    // * we include this so we don't get warnings in the console---
        // !we can't include the bottom it will crash the app
    // mongoose.set('useFindAndModify', false);