import React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';

import useStyles from './Styles'

// *<CardMedia className={classes.media} image={post.selectedFile} title={post.title} />; the posts here are taken from props
// *<Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>; this will tell us on our card like 5min or 5s ago
// * post.tags.map((tag) => `#${tag} `); we are looping through our tags and putting "#" on them
const Post = ({ post, setCurrentId }) => {
    const classes = useStyles()
    return (
        <Card className={classes.card}>
          <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
          <div className={classes.overlay}>
            <Typography variant="h6">{post.creator}</Typography>
            <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
          </div>
          <div className={classes.overlay2}>
            <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)}><MoreHorizIcon fontSize="medium" /></Button>
            {/* <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)}><MoreHorizIcon fontSize="default" /></Button> */}
          </div>
          <div className={classes.details}>
            <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
            
          </div>
          <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
          </CardContent>
          <CardActions className={classes.cardActions}>
            <Button size="small" color="primary" onClick={() => {}}><ThumbUpAltIcon fontSize="small" /> Like {post.likeCount} </Button>
            {/* <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}><ThumbUpAltIcon fontSize="small" /> Like {post.likeCount} </Button> */}
            <Button size="small" color="primary" onClick={() => {}}><DeleteIcon fontSize="small" /> Delete</Button>
            {/* <Button size="small" color="primary" onClick={() => {dispatch(deletePost(post._id))}}><DeleteIcon fontSize="small" /> Delete</Button> */}
          </CardActions>
        </Card>
      );
    };

export default Post