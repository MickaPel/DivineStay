import { BUY_TRAVEL, BUY_TRAVEL1, BUY_TRAVEL2, BUY_TRAVEL3, BUY_TRAVEL4, BUY_TRAVEL5, BUY_TRAVEL6,
    BUY_TRAVEL7, BUY_TRAVEL8, BUY_TRAVEL9, BUY_TRAVEL10, BUY_TRAVEL11, BUY_TRAVEL12, BUY_TRAVEL13 } from "./type";



const initialStateTravel = {
    travels: 11,
    travels1: 11,
    travels2: 11,
    travels3: 11,
    travels4: 11,
    travels5: 11,
    travels6: 11,
    travels7: 11,
    travels8: 11,
    travels9: 11,
    travels10: 11,
    travels11: 11,
    travels12: 11,
    travels13: 11
}


export const travelReducer = (state = initialStateTravel, action) => {
    switch(action.type) {
        case BUY_TRAVEL:
            return {
                ...state,
                travels: state.travels - action.payload
            }
        case BUY_TRAVEL1:
            return {
                ...state,
                travels1: state.travels1 - action.payload
            }
        case BUY_TRAVEL2:
            return {
                ...state,
                travels2: state.travels2 - action.payload
            }
        case BUY_TRAVEL3:
            return {
                ...state,
                travels3: state.travels3 - action.payload
            }
        case BUY_TRAVEL4:
            return {
                ...state,
                travels4: state.travels4 - action.payload
            }
        case BUY_TRAVEL5:
            return {
                ...state,
                travels5: state.travels5 - action.payload
            }
        case BUY_TRAVEL6:
            return {
                ...state,
                travels6: state.travels6 - action.payload
            }
        case BUY_TRAVEL7:
            return {
                ...state,
                travels7: state.travels7 - action.payload
            }
    case BUY_TRAVEL8:
            return {
                ...state,
                travels8: state.travels8 - action.payload
            }
        case BUY_TRAVEL9:
            return {
                ...state,
                travels9: state.travels9 - action.payload
            }
        case BUY_TRAVEL10:
            return {
                ...state,
                travels10: state.travels10 - action.payload
            }
        case BUY_TRAVEL11:
            return {
                ...state,
                travels11: state.travels11 - action.payload
            }
        case BUY_TRAVEL12:
            return {
                ...state,
                travels12: state.travels12 - action.payload
            }
        case BUY_TRAVEL13:
            return {
                ...state,
                travels13: state.travels13 - action.payload
            }

        default: 
            return state
    }
}

// export default { travelReducer, cartItemReducer };