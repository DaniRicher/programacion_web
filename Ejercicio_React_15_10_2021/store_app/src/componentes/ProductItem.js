import React, {useContext} from 'react'
import {Col, Row} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { CartContext } from '../contexts/CartContext'

const ProductItem=(props)=>{
    const{name, precio}=props.producto
    const{addProduct} = useContext(CartContext);

    const onClickAdd=(event)=>{
        event.preventDefault();
        addProduct(props.producto);
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
                <Col className="py-4 text-end">
                <Button variant="light">Details</Button> 
                <Button variant="dark" onClick={onClickAdd}>Add To Cart</Button>
                </Col>
            </Row>
        </div>
    );
}
export default ProductItem;