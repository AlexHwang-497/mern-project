// *   import*; this means we import everything from the actions
import * as api from '../api/index'

// ?these are the action creators below; action creators are functions that return actions

// *getPosts = () => async(dispatch); the async(dispatch) is what thunk allows us to do 
export const getPosts = () => async (dispatch) => {
    try{
        // *requesting all the data from the API
        const { data } = await api.fetchPosts();
        console.log('this is the data that is given from getposts in action/posts.js:', data)
        dispatch({ type: 'FETCH_ALL', payload: data });


    } catch(error){
        console.log('this is the error message in actions/posts.js',error.message)

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
        console.log('the post has been created in action/posts.js createPost:', data)
    } catch(error){
        console.log(error.message)
    }   
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
      const { data } = await api.updatePost(id, post);
      console.log('this is the data from updatePost in actions/posts.js:',data)
  
      dispatch({ type: 'UPDATE', payload: data });
    } catch (error) {
    
      console.log(error);
      console.log('this is the error message from updatePost in actions/posts.js',error.message);
    }
  };


  export const deletePost = (id) => async (dispatch) => {
    try {
      await api.deletePost(id);
  
      dispatch({ type: 'DELETE', payload: id });
    } catch (error) {
      console.log('this is the error message from deletePost',error)  
      console.log(error.message);
    }
  };