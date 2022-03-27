import {
    SET_TOTAL_PER,SET_TOTAL_TIP,SET_TIP_PER,
    SET_PEOPLE_NUM, SET_START_PRICE, SET_NO_PEOPLE,
    SET_ALL_EMPTY
} from './types';

const CalculatorReducer = (state, action) => {
    switch(action.type) {
        case SET_TOTAL_PER:
            return {
                ...state,
                totalEach: action.payload
            }
        case SET_TOTAL_TIP:
            return {
                ...state,
                tipPercent: Number(action.payload)
            }
        case SET_TIP_PER:
            return {
                ...state,
                tipEach: action.payload
            }
        case SET_PEOPLE_NUM:
            return {
                ...state,
                people: action.payload
            }
        case SET_START_PRICE:
            return {
                ...state,
                startPrice: action.payload
            }
        case SET_NO_PEOPLE:
            return {
                ...state,
                noPeople: action.payload
            }
        case SET_ALL_EMPTY:
            return {
                ...state,
                isEmpty: action.payload
            }
        default:
            return state;
    }
}

export default CalculatorReducer;