import React, { useContext } from "react";
import {Col, Row} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { CartContext } from "../contexts/CartContext";

export default function CheckoutBox(){
    const {clearCart, handleCheckout, itemCount, total} = useContext(CartContext);

    const onClickBuy=(event)=>{
        event.preventDefault();
        if(itemCount !== 0){
            handleCheckout();
        }
    }
    const onClickClear=(event)=>{
        event.preventDefault();
        clearCart();
    }
    
    return(
        <div className="item">
        <Row className="">
            <Col className="text-start">
            <h4>Total Items: {itemCount}</h4>
            </Col>
        </Row>
        <Row>
            <Col className="text-start">
                <h4> Total a pagar: ${total}</h4>
            </Col>
        </Row>
        <Row>
            <Col className="py-4 text-end">
            <Button variant="light" onClick={onClickBuy}>Comprar todo</Button>
            <Button variant="dark" onClick={onClickClear}>Limpiar carrito</Button>
            </Col>
        </Row>
    </div>
    );
}