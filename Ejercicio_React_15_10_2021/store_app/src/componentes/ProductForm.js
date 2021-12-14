import React, {useState} from "react";
import Button from 'react-bootstrap/Button'
import PlaceServices from '../services/PlaceServices';

export default function ProductForm(props){

    const estadoInicialForm = {
        name: '',
        precio: '',
        image: 'https://www.macpollo.com/images/salud/282.png'
    };

    const [estadoForm, cambiarEstadoForm] = useState(estadoInicialForm);

    const gestionarCamposForm = event => {
        const nameInput = event.target.name;
        const valueInput = event.target.value;
        cambiarEstadoForm({...estadoForm, [nameInput]:valueInput}); 
    }

    const onSubmitForm = ev => { 
        ev.preventDefault();
        (async()=>{
            try {
                await PlaceServices.create(estadoForm);
            } catch (error) {
                console.log(error);
            }
        })();
        props.agregar(estadoForm);
        //console.log(estadoForm);
        cambiarEstadoForm(estadoInicialForm);
    }

    return(
        <>
        <h3>Agregar Producto</h3>
        <form onSubmit={onSubmitForm}>

            <div className="mb-3">
                <label htmlFor="nameProduct" className="form-label">Nombre del Producto</label>
                <input type="text" class="form-control" id="nameProduct" 
                name="name" value={estadoForm.name} onChange={gestionarCamposForm} />
            </div>
            <div className="mb-3">
                <label htmlFor="price" className="form-label">Precio del Producto</label>
                <input type="text" class="form-control" id="price" 
                name="precio" value={estadoForm.precio} onChange={gestionarCamposForm} />
            </div>
            <div className="mb-3">
            <Button type="submit" className="btn btn-primary" variant="dark">Agregar Producto</Button>
            </div>

      </form>
      </>
    );

}