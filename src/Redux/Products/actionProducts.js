import { ADD_TO_CART, REMOVE_FROM_CART, ADJUST_QUANTITY, EMPTY_CART} from "./type";


export const addToCart = (itemId, productsNumber) => {
    return {
        type: ADD_TO_CART,
        payload: {
            id: itemId,
            travels: productsNumber
        }
    }
}

export const removeFromCart = (itemId) => {
    return {
        type: REMOVE_FROM_CART,
        payload: {
            id: itemId
        }
    }
}

export const adjustQuantity = (itemId, value) => {
    return {
        type: ADJUST_QUANTITY,
        payload: {
            id: itemId,
            qty: value
        }
    }
}

export const emptyCart = () => {
    return {
        type: EMPTY_CART,
    };
};
