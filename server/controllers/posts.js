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


export const deletePost = async (req, res) => {
    const { id } = req.params;
    console.log('this is what is given in deletePost in server/controllers/posts.js',req.params)
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id`);

    await PostMessage.findByIdAndRemove(id);
    console.log('we have reacahed delete in deletePost')
    res.json({ message: "Post deleted successfully." });



    // if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);


}

export const likePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id`);
    const post = await PostMessage.findById(id);
    const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });
    res.json(updatedPost);
}


export default router