import React,{useState,useEffect} from 'react';
import { Col, Row } from 'react-bootstrap';
import ProductItem from './ProductItem';
import PlaceServices from '../services/PlaceServices';


const GridProduct=()=>{
    
    const [items, setItems] = useState([]);
    useEffect(()=>{
        const getAllPlaces = ()=>{
            PlaceServices.getAll().then(response =>{
                setItems(response.data);
            }).catch(e=> {
                console.log(e);
            })
        }
        getAllPlaces();
    },[])
    return(
        <Row className="g-3">
            {items.map((item) => {
                return(
                    <Col className="col-4">
                        <div className="border px-3 pt-2">
                        <ProductItem producto = {item}/>
                        </div>
                    </Col>
                )
            })}
        </Row>

    );
}
export default GridProduct