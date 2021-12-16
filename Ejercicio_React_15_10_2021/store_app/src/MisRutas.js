import React from 'react';
import { Route, Switch } from 'react-router-dom'; 
import About from './pages/About'; 
import Cart from './pages/Cart';
import Store from './pages/Store';
//import AdminProduct from './pages/AdminProduct';

export default function MisRoutes(){ 
    return( 
        <Switch> 
            <Route path='/store' component={Store}/>
            <Route path='/cart' component={Cart}/>
            <Route path='/about' component={About}/>
            {/*<Route path='/admin_product' component={AdminProduct}/>}*/}
        </Switch>
    );
}