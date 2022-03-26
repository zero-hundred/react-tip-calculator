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
        noPeople: null
    }

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
        if(newPeople > 0) {
            setNoPeople(false);
        }
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
        if(state.noPeople === null) {
            setNoPeople(false)
        } else if(state.people <= 0) {
            setNoPeople(true)
        } else {
            setNoPeople(false)
        }
    }

    // Problem Lies Here
    function checkForm() {
        if((state.people !== '' && state.people > 0) && 
        (state.startPrice !== '' && state.startPrice > 0) &&
        (state.tip > 0)) {
          var totalPer = (state.startPrice * Number(state.tip / 100) + state.startPrice) / state.people;
          setTotalPer(totalPer);
    
          var tipEach = (state.startPrice * Number(state.tip / 100) / state.people);
          setTipPer(tipEach)
          setNoPeople(false);
        }
    }

    function handleTip(e) {
        setTip(Number(e.target.value));
        checkForm();
        setEmpty(false);
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
                noPeople: state.noPeople,
                handleTip: handleTip,
                handlePeople: handlePeople,
                handleStartPrice: handleStartPrice,
                checkForm: checkForm,
                checkError: checkError
            }}
        >
            {props.children}
        </CalculatorContext.Provider>
    )
}

export default CalculatorState;