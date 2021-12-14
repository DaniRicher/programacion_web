
const contarItems = (itemList) => {
    const acumulador = itemList.reduce((acum, item) => acum + item.cantidad, 0);
    return acumulador;
}

const sumaTotal = (itemList) => {
    const acumulador = itemList.reduce((acum, item) => acum + item.precio * item.cantidad, 0.0) ;
    return acumulador;
}

export const CartReducer = (state, action) =>{
    switch(action.type){
        case "ADD_ITEM":
            let encontrado = state.cartItems.find((p) => action.payload.id === p.id);
            if(!encontrado){
                state.cartItems.push(
                    {
                        ...action.payload,
                        cantidad: 1
                    }
                );
            }else{
                state = {
                    ...state,
                    cartItems: state.cartItems.map(elem => {
                        if(elem.id === action.payload.id){
                            return {...elem, cantidad: elem.cantidad + 1}
                        }else{
                            return elem;
                        }
                    })
                }
            }
            state = {
                ...state,
                itemCount: contarItems(state.cartItems),
                total: sumaTotal(state.cartItems),
                checkout: false
            }
            return state;
        case "REMOVE_ITEM":
            state = {
                ...state,
                cartItems: state.cartItems.filter(elem => elem.id !== action.payload.id)
            }
            state = {
                ...state,
                itemCount: contarItems(state.cartItems),
                total: sumaTotal(state.cartItems)
            }
            return state;
        case "INCREASE":
            state = {
                ...state,
                cartItems: state.cartItems.map(elem => {
                    if(elem.id === action.payload.id){
                        return {...elem, cantidad: elem.cantidad + 1}
                    }else{
                        return elem;
                    }
                })
            }
            state = {
                ...state,
                itemCount: contarItems(state.cartItems),
                total: sumaTotal(state.cartItems)
            }
            return state;
        case "DECREASE":
            state = {
                ...state,
                cartItems: state.cartItems.map(elem => {
                    if(elem.id === action.payload.id){
                        return {...elem, cantidad: elem.cantidad - 1}
                    }else{
                        return elem;
                    }
                })
            }
            state = {
                ...state,
                itemCount: contarItems(state.cartItems),
                total: sumaTotal(state.cartItems)
            }
            return state;
        case "CHECKOUT":
            return {cartItems: [], itemCount: 0, total: 0.0, checkout: true};
        case "CLEAR":
            return {...state, cartItems: [], itemCount: 0, total: 0.0};
        default:
            return state;
    }
}