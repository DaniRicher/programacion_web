//import React from "react";

export const CartReducer = (state, action) =>{
    const contarItems = (itemList) => {
        const acumulador = itemList.reduce((acum, item) => acum + item.cantidad, 0);
        return acumulador;
    }
    const sumaTotal = (itemList) => {
        const acumulador = itemList.reduce((acum, item) => acum + item.Precio * item.cantidad, 0.0) ;
        return acumulador;
    }
switch(action.type){
    case "ADD_ITEM":
        let newState={...state}
        const encontrado= !newState.cartItems.find((item) => item.id === action.payload.id);
        if (!encontrado) {
            newState.cartItems.push(
                {
                    ...action.payload,
                    cantidad: 1
                }
            );
        }
        else{
            newState ={
                ...newState,
                cartItems: newState.cartItems.map(elem => {
                    if(elem.id === action.payload.id){
                        return{...elem, cantidad: elem.cantidad +1 }
                    }else{
                        return elem;
                    }
                }

                )
            }
        }
        newState={
            ...newState,
            itemCount: contarItems(newState.cartItems),
            total: sumaTotal(newState.cartItems)
        }
        return newState;
    case "REMOVE_ITEM":
        //const newCartItems=state.cartItems.filter();
        return {
        };
    case "INCREASE":
        //const newStateCartItems = {
        //    };
        const newState1 = {
            };
        return newState1;
    case "DECREASE":
        //const newcartItemsInDecrease = {
        //        };
            return {
                };
    case "CHECKOUT":
            return {
                };
    case "CLEAR":
        break;
    default:
        return state;
    }
}