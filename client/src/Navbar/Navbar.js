import React, {useEffect, useState} from 'react'
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import {Link} from 'react-router-dom'
import decode from 'jwt-decode';

import useStyles from './styles'
import memories from '../images/memories.png'

const Navbar = () =>{
    const classes=useStyles()

    // *this allows us to get our userId from authetentication
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    console.log('this is the user from navbar.js',user)

    useEffect(() => {
        // *we are checking if the token exists
        const token = user?.token;
        
        setUser(JSON.parse(localStorage.getItem('profile')));
        // if (token) {
        //   const decodedToken = decode(token);
    
        //   if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        // }
    
      }, []);




    const logout =null
    
    return(
        <AppBar className={classes.appBar} position='static' color='inherit'>
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">stock portfolio you left off at 25:28</Typography>
                <img className={classes.image} src={memories} alt="icon" height ="60"/>
            </div>
            <Toolbar className={classes.toolbar}>
                {user? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                        {/* <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar> */}
                        <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                        {/* <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography> */}
                        <Button variant="contained" className={classes.logout} color="secondary" onClick={()=>{}}>Logout</Button>
                        {/* <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button> */}
                    </div>
                ) : (
                    <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                )}
            </Toolbar>
        </AppBar>
    )
}

export default Navbar