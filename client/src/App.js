import React, {useState, useEffect} from 'react'
import {Container, AppBar, Grow, Grid, Typography} from '@material-ui/core'
// *this allows us to dispatch an action
import { useDispatch } from 'react-redux';

import {getPosts} from './actions/posts'
import memories from './images/memories.png'
import Posts from './Components/Posts/Posts'
import Form from './Components/Forms/Form'
import useStyles from './styles' //////////////////////////////////


// *<Grow>; provides simple animation
const App = () => {
    const dispatch = useDispatch()
    const classes = useStyles()

    useEffect(()=> {
        dispatch(getPosts())
    },[dispatch])

    return (
        <Container maxWidth='lg'>
        
        
            <AppBar className={classes.appBar} position='static' color='inherit'>
                <Typography className={classes.heading} variant='h2' align='center'>Stock Portolio Builder</Typography>
                <img className={classes.image} src={memories} alt="icon" height ="60"/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justifyContent='space-between' alignItems='stretch' spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    
    )
}
export default App