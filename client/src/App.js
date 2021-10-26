import React from 'react'
import {Container} from '@material-ui/core'
// *this will allow us to use LINK
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import FetchStockPrice from './StockData/FetchStockPrices';

import useStyles from './styles' 
import Navbar from './Navbar/Navbar';
import Home from '../src/Home/Home';
import Auth from './Auth/Auth';


// *<Grow>; provides simple animation
const App = () => {
    return (
        <BrowserRouter>
            <Container maxWidth='lg'>
                <Navbar/>
        
                <Switch>
                    <Route path ="/" exact component={Home}/>
                    <Route path ="/auth" exact component={Auth}/>
                </Switch>
            </Container>
        </BrowserRouter>
    )
}
export default App