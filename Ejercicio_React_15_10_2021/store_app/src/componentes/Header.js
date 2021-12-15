import React, { useContext } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from "react-router-dom"; 
import { CartContext } from '../contexts/CartContext';

const Header =()=>{
    const {itemCount} = useContext(CartContext);
    return(
        <Row>
            <Col className="col py5 text-center border">
                <Link to='/store'>Store</Link>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <Link to='/about'>About</Link>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>
                <Link to='/cart'>Cart</Link>
                <span>({itemCount})</span>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <Link to='/admin_product'>Administrar Productos</Link>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <Link to='/login'>Login</Link>
            </Col>
        </Row>
    );
}

export default Header