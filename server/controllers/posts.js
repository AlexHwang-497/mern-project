// * we are creating all the handlers for our routes in this componet
import express from 'express'
import mongoose from 'mongoose'

import PostMessage from '../models/postMessage.js'

const router = express.Router()

export const getPosts = async(req, res) => {
    try{
        // * we are retrieving all the messages in the database
        const postMessages = await PostMessage.find()
        console.log('this is the postMessages from controllers->post.js',postMessages)
        console.log(postMessages)
        res.status(200).json(postMessage)
    } catch (error){
        res.status(404).json({message:error.message})
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
    
    // const {title,message,selectedFile,creator,tags} = req.body

    // const newPostMessage = new PostMessage({title,mesage,selectedFile,creator,tags})
    // try{
    //     await newPostMessage.save()
    //     res.status(201).json(newPostMessage)
    // } catch(error){
    //     res.status(409).json({mesage:error.message})
    // }
}

// export const getPost = async(req, res) => {
//     const{id} = req.params
//     try {
//         const post = await PostMessage.findById(id)
//         res.status(200).json(post)
//     } catch (error){
//         res.status(404).json({message:error.message})
//     }
// }


// export const updatePost = async = (req,res) => {
//     const {id} = req.params;
//     if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).sent(`No post with id:${id}`)
//     await PostMessage.findByIdAndRemove(id)
//     res.json({message:'Post deleted successfully!'})
// }

// export const likePost = async(req,res) => {
//     const {id} = req.params

//     if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id:${id}`)

//     const post = await PostMessage.findById(id)

//     const updatePost=await PostMessage.findByIdandUpdate(id,{likeCount:post.likeCount+1})

//     res.json(updatePost)
// }


export default router