import { useReducer } from 'react';
import {
SET_TOTAL_PER,SET_TOTAL_TIP,SET_TIP_PER,
SET_PEOPLE_NUM, SET_START_PRICE, SET_NO_PEOPLE,
SET_ALL_EMPTY
} from './types';
import CalculatorContext from './CalculatorContext';
import CalculatorReducer from './CalculatorReducer';

const CalculatorState = props => {
    const initStates = {
        totalPer: 0,
        tipPer: 0,
        tip: null,
        people: 0,
        startPrice: null,
        isEmpty: true,
        noPeople: true
    }
    const {tip, people,
    startPrice} = initStates;

    const [state, dispatch] = useReducer(CalculatorReducer, initStates);

    function setNoPeople(setBool) {
        dispatch({
            type: SET_NO_PEOPLE,
            payload: setBool
        })
    }
    function setTotalPer(setBool) {
        dispatch({
            type: SET_TOTAL_PER,
            payload: setBool
        })
    }
    function setTipPer(setBool) {
        dispatch({
            type: SET_TIP_PER,
            payload: setBool
        })
    }
    function setTip(newTip) {
        dispatch({
            type: SET_TOTAL_TIP,
            payload: newTip
        })
    }
    function setEmpty(setBool) {
        dispatch({
            type: SET_ALL_EMPTY,
            payload: setBool
        })
    }
    function setPeople(newPeople) {
        dispatch({
            type: SET_PEOPLE_NUM,
            payload: newPeople
        })
    }
    function setStartPrice(price) {
        dispatch({
            type: SET_START_PRICE,
            payload: price
        })
    }
    function checkError() {
        if(people === null) {
          setNoPeople(false)
        } else if(people <= 0) {
          setNoPeople(true)
        } else {
          setNoPeople(false)
        }
    }
    function checkForm() {
        if((people !== '' && people > 0) && 
        (startPrice !== '' && startPrice > 0) &&
        (tip !== '' && tip > 0)) {
          var total = (startPrice * Number(tip / 100) + startPrice) / people;
          setTotalPer(total);
    
          var tipEach = (tip / people);
          setTipPer(tipEach)
          setNoPeople(false);
        }
    }

    function handleTip(e) {
        setTip(Number(e.target.value));
        setEmpty(false);
        checkForm();
    }
    function handlePeople(e) {
        setPeople(Number(e.target.value));
        setEmpty(false);
        checkError();
        checkForm();
    }
    function handleStartPrice(e) {
        setStartPrice(Number(e.target.value));
        setEmpty(false);
        checkForm();
    }

    return (
        <CalculatorContext.Provider
            value={{
                totalPer: state.totalPer,
                tipPer: state.tipPer,
                people: state.people,
                startPrice: state.startPrice,
                isEmpty: state.isEmpty,
                handleTip: handleTip,
                handlePeople: handlePeople,
                handleStartPrice: handleStartPrice
            }}
        >
            {props.children}
        </CalculatorContext.Provider>
    )
}

export default CalculatorState;