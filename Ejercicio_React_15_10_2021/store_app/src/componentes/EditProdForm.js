import React, {useState} from "react";
import Button from 'react-bootstrap/Button'
import PlaceServices from '../services/PlaceServices';

export default function EditProdForm(props){

    const estadoInicialForm = {
        id: props.editado.id,
        name: props.editado.name,
        precio: props.editado.precio,
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
        console.log(estadoForm);
        (async()=>{
            try {
                await PlaceServices.update(estadoForm.id,estadoForm);
            } catch (error) {
                console.log(error);
            }
        })();
        props.cambiar(estadoForm); 
    }

    return(
        <>
        <h3>Modificar Producto</h3>
        <form onSubmit={onSubmitForm}> 

            <div className="mb-3">
                <label htmlFor="nameProduct" className="form-label">Nombre del Producto</label>
                <input autoFocus type="text" class="form-control" id="nameProduct" 
                name="name" value={estadoForm.name} onChange={gestionarCamposForm} />
            </div>
            <div className="mb-3">
                <label htmlFor="price" className="form-label">Precio del Producto</label>
                <input type="text" class="form-control" id="price" 
                name="precio" value={estadoForm.precio} onChange={gestionarCamposForm} />
            </div>
            <div className="mb-3">
            <Button type="submit" className="btn btn-primary" variant="dark">Modificar Producto</Button>
            </div>

      </form>
      </>
    );

}