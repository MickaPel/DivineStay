import { BUY_TRAVEL, BUY_TRAVEL1, BUY_TRAVEL2, BUY_TRAVEL3, BUY_TRAVEL4, BUY_TRAVEL5, BUY_TRAVEL6,
    BUY_TRAVEL7, BUY_TRAVEL8, BUY_TRAVEL9, BUY_TRAVEL10, BUY_TRAVEL11, BUY_TRAVEL12, BUY_TRAVEL13, 
    ADD_TO_CART, REMOVE_FROM_CART, ADJUST_QUANTITY, EMPTY_CART, SAVE_ORDER_HISTORY_START, 
    GET_USER_ORDER_HISTORY_START, SET_USER_ORDER_HISTORY } from "./type";


export const buyTravel = (productsNumber) => {
    return {
        type: BUY_TRAVEL,
        payload: productsNumber
    }
}

export const buyTravel1 = (productsNumber) => {
    return {
        type: BUY_TRAVEL1,
        payload: productsNumber
    }
}

export const buyTravel2 = (productsNumber) => {
    return {
        type: BUY_TRAVEL2,
        payload: productsNumber
    }
}

export const buyTravel3 = (productsNumber) => {
    return {
        type: BUY_TRAVEL3,
        payload: productsNumber
    }
}

export const buyTravel4 = (productsNumber) => {
    return {
        type: BUY_TRAVEL4,
        payload: productsNumber
    }
}

export const buyTravel5 = (productsNumber) => {
    return {
        type: BUY_TRAVEL5,
        payload: productsNumber
    }
}

export const buyTravel6 = (productsNumber) => {
    return {
        type: BUY_TRAVEL6,
        payload: productsNumber
    }
}

export const buyTravel7 = (productsNumber) => {
    return {
        type: BUY_TRAVEL7,
        payload: productsNumber
    }
}

export const buyTravel8 = (productsNumber) => {
    return {
        type: BUY_TRAVEL8,
        payload: productsNumber
    }
}

export const buyTravel9 = (productsNumber) => {
    return {
        type: BUY_TRAVEL9,
        payload: productsNumber
    }
}

export const buyTravel10 = (productsNumber) => {
    return {
        type: BUY_TRAVEL10,
        payload: productsNumber
    }
}

export const buyTravel11 = (productsNumber) => {
    return {
        type: BUY_TRAVEL11,
        payload: productsNumber
    }
}

export const buyTravel12 = (productsNumber) => {
    return {
        type: BUY_TRAVEL12,
        payload: productsNumber
    }
}

export const buyTravel13 = (productsNumber) => {
    return {
        type: BUY_TRAVEL13,
        payload: productsNumber
    }
}

export const addToCart = (itemId, productsNumber, travelsNumber) => {
    return {
        type: ADD_TO_CART,
        payload: {
            id: itemId,
            travels: productsNumber,
            restOfTravels: travelsNumber
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

export const saveOrderHistory = (order) => {
    return {
        type: SAVE_ORDER_HISTORY_START,
        payload: order
    };
};

export const getUserOrderHistory = (uid) => {
    return {
        type: GET_USER_ORDER_HISTORY_START,
        payload: uid
    };
};

export const setUserOrderHistory = (history) => {
    return {
        type: SET_USER_ORDER_HISTORY,
        payload: history
    };
};
