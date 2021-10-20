import React, {useEffect, useState} from 'react'
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';

import useStyles from './styles'
import memories from '../images/memories.png'

const Navbar = () =>{
    const classes=useStyles()
    return(
        <AppBar className={classes.appBar} position='static' color='inherit'>
            <Typography className={classes.heading} variant='h2' align='center'>Stock Portolio Builder; you left off at 1:00:56 on 10/19/2021</Typography>
            <img className={classes.image} src={memories} alt="icon" height ="60"/>
        </AppBar>
    )
}

export default Navbar