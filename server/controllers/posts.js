// * we are creating all the handlers for our routes in this componet
import mongoose from 'mongoose'
import express from 'express'

import PostMessage from '../models/postMessage.js'

const router = express.Router()

export const getPosts = async(req, res) => {
    try{
        // * we are retrieving all the messages in the database
        const postMessages = await PostMessage.find();
        console.log('this is the postMessages from controllers->post.js',postMessages)
        console.log(postMessages)
        res.status(200).json(postMessages);
    } catch (error){
        res.status(404).json({ message: error.message });
        console.log('this is the error message from getPosts in server/controllers:',error.message)
    }
}

export const createPost = async(req,res) => {
    const post = req.body

    const newPost = new PostMessage(post)

    try{
        await newPost.save()
        res.status(201).json(newPost)
    } catch(error){
        res.status(409).json({message:error.message})
    }
}

export const updatePost = async (req, res) => {
    // * this is coming from  post/123 for example
    console.log('this is the request from update post in server/controllers/posts.js:',req)
    const { id: _id } = req.params;
    const post = req.body

    // * this is going to check if our _id is real or not
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No post with id`);

    // *if the id is valid then we do the following

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, {...post, _id}, { new: true });
    console.log('this is what is given in updatedPost in server/controllers/posts.js',updatedPost)
    res.json(updatedPost);
    
    // const { title, message, creator, selectedFile, tags } = req.body;

    // const updatedPost = { creator, title, message, tags, selectedFile, _id: id };
}



export default router