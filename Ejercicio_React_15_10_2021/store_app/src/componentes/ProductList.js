import React, {useState} from "react";
import AdmProductItem from "./AdmProductItem";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProductForm from "./ProductForm";
import EditProdForm from "./EditProdForm";

export default function ProductList(){
    const itemsInitial = [
        {id:0,nombre:'Buffalo - Striploin',Precio:'39.11'},
        {id:1,nombre:'Bacardi Brezzer - Tropical',Precio:'257.92'}
    ];

    const [items, setItems] = useState(itemsInitial);

    const [showEditForm, setShowEditForm] = useState(false);

    const [auxItem, setAuxItem] = useState({});

    const [idCount, setIdCount] = useState(itemsInitial.length);

    const alEnviarForm = (itemFromForm) => {
        const idI = idCount;
        const newItem = {id: idI, ...itemFromForm};
        setItems([newItem, ...items]);
        setIdCount(idCount+1);
    }

    const alEliminar = (idItem) => {
        setItems(items.filter(item => item.id !== idItem));
    }

    const alModificar = (itemFromForm) => {
        setItems(items.map(item => {
            if(item.id === itemFromForm.id){
                return itemFromForm;
            }else{
                return item;
            }
        }));
        setShowEditForm(false);
    }

    const showForm = (showEdit)=>{
        if(!showEdit){
            return(<ProductForm agregar={alEnviarForm} />);
        }else{
            return(<EditProdForm cambiar={alModificar} editado={auxItem}/>);
        }
    }

    return (
        <Row>
            <Col className="col-4">
            {showForm(showEditForm)}
            </Col>
            <Col className="col-8 border">
            <Row className="g-3">
            {
            
                items.map(item => (
                    <Col className="col-4">
                        <div className="border px-3 pt-2">
                        <AdmProductItem producto={item} eliminar={alEliminar} showEdit={setShowEditForm} 
                        aux={setAuxItem}/> 
                        </div>
                    </Col>
                    )
                )
            
            }
            </Row>
            </Col>
        </Row>
    );
}

