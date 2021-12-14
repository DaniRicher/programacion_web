import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import {Col, Row} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

export default function CarroItem({producto}){
    const {name, precio, cantidad} = producto;
    const {increase, decrease, removeProduct} = useContext(CartContext);

    const onClickRemove=(event)=>{
        event.preventDefault();
        removeProduct(producto);
    }
    const onClickDecrease=(event)=>{
        event.preventDefault();
        decrease(producto);
    }
    const onClickIncrease=(event)=>{
        event.preventDefault();
        increase(producto);
    }

    const showButton = (cant) =>{
        if(cant === 1){
            return(<Button variant="dark" onClick={onClickRemove}>Remover</Button>)
        }else{
            return(<Button variant="dark" onClick={onClickDecrease}>Decrementar</Button>)
        }
    }

    return(
        <div className="item">
            <Row className="">
                <Col className="text-start">
                <span>{name}</span>
                </Col>
            </Row>
            <Row>
                <Col className="text-start">
                    <h4>${precio}</h4>
                </Col>
            </Row>
            <Row>
                <Col className="text-center">
                    <span>Cantidad: {cantidad}</span>
                </Col>
            </Row>
            <Row>
                <Col className="py-4 text-end">
                <Button variant="light" onClick={onClickIncrease}>Incrementar</Button> {showButton(cantidad)}
                </Col>
            </Row>
        </div>
    );
}