import React, {useState,useEffect} from "react";
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux'
import useStyles from './Styles'
import FileBase from 'react-file-base64';
import { createPost,updatePost } from "../../actions/posts";


const Form = ({ currentId, setCurrentId }) => {
    const [postData,setPostData] = useState({creator:'',title:'',message:'',selectedFile:''})
    const classes = useStyles()
    const dispatch = useDispatch()
    const handleSubmit = async(e) =>{
        e.preventDefault()
        if (currentId) {
            // dispatch(updatePost(currentId, postData));
            // clear();
        } else {
            dispatch(createPost(postData));
            // clear();
          }



        dispatch(createPost(postData))

    }

    const clear = () =>{
        setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
    }

// *value for   <TextField name="creator"/>; the value is going to be stored in the state aka postData.creator
    // *this means the data from the post will be stored in the post data object in the state and each object key will be a speicific text field

// * how do we change the value of the onChange?
    // *we jsut need to update one part of the object's state
    // *1st we need to spread the post data aka ...postData;  if we don't do this we will just rewrite teh e.target.value
// *<FileBase/>; this allows us to upload files
     
    return (
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant='h6'>Creating a Portfolio</Typography>
                <TextField name="creator" variant="outlined" label="Creator" fullWidth value ={postData.creator} onChange={(e)=> setPostData({...postData,creator:e.target.value})}/>
                <TextField name="title" variant="outlined" label="Title" fullWidth value ={postData.title} onChange={(e)=> setPostData({...postData,title:e.target.value})}/>
                <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
                <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
                <div className={classes.fileInput}><FileBase type='file' multiple={false} onDone={({base64})=> setPostData({...postData, selectedFile:base64})}/></div>
                <Button className={classes.buttonSubmit} variant='contained' color='primary' size='large' type='submit' fullWidth>Submit</Button>
                <Button variant = 'contained' color='secondary' size ='small' onClick={clear} fullWidth>Clear</Button>
            </form>            
        </Paper>
    
    )

}

export default Form