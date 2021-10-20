// *   import*; this means we import everything from the actions
import * as api from '../api/index'

// ?these are the action creators below; action creators are functions that return actions

// *getPosts = () => async(dispatch); the async(dispatch) is what thunk allows us to do 
export const getPosts = () => async(dispatch) => {
    try{
        // *requesting all the data from the API
        const { data } = await api.fetchPosts();
        dispatch({type:'FETCH_ALL', payload:data})


    } catch(error){
        console.log(error.message)

    }
    // *an action is an object that has a type and payload
        // *payload; it is usually the data where we store all of our posts
        // *dispatch is an action btw
    // const action = {type:'FETCH_ALL', payload:[]}
}

export const createPost = (post) => async(dispatch) => {
    try{
        // *this is making a backend post to our server
        const {data} = await  api.createPost(post)
        dispatch({type:'CREATE', payload:data})
    } catch(error){
        console.log(error.message)
    }   
}