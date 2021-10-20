import React from "react";
import Post from "./Post/Post";
import useStyles from './styles'
// *this allows us to fetch data from the REDUX store
import { useSelector } from "react-redux";


const Posts = () =>{
    // * how do we know that this is called posts?
        // * if you go in index.js and look at export const reducers=combineReducers({posts})
    const posts = useSelector((state)=>state.posts)
    const classes = useStyles()

    console.log('these are the posts in posts.js',posts)


    return (
        <>
            <h1 >Posts</h1>
            <Post/>
            <Post/>
        </>
    )

}

export default Posts