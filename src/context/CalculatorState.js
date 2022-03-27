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
        totalEach: 0,
        tipEach: 0,
        tipPercent: 0,
        people: null,
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
    function setTotalEach(totalEach) {
        dispatch({
            type: SET_TOTAL_PER,
            payload: totalEach
        })
    }
    function setTipPercent(percent) {
        dispatch({
            type: SET_TOTAL_TIP,
            payload: percent
        })
    }
    function setTipEach(tipEach) {
        dispatch({
            type: SET_TIP_PER,
            payload: tipEach
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
    // Checks people state
    function checkError() {
        if(state.people === null) {
            setNoPeople(null)
        } else if(state.people <= 0) {
            setNoPeople(true)
        } else {
            setNoPeople(false)
        }
    }

    // Checks is form is filled
    // If form filled sets total/tip each
    function checkForm() {
        if((state.people !== '' && state.people > 0) && 
        (state.startPrice !== '' && state.startPrice > 0) &&
        (state.tipPercent > 0)) {
            // Generates total $ per person
          var totalPer = (state.startPrice * Number(state.tipPercent / 100) + state.startPrice) / state.people;
          setTotalEach(totalPer);
    
          // Generates tip $ per person
          var tipEach = (state.startPrice * Number(state.tipPercent / 100) / state.people);
          setTipEach(tipEach);
        }
    }

    function handleTipPercent(event) {
        setTipPercent(event.target.value);
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
                totalEach: state.totalEach,
                tipEach: state.tipEach,
                tipPercent: state.tipPercent,
                people: state.people,
                startPrice: state.startPrice,
                isEmpty: state.isEmpty,
                setTipPercent: state.setTipPercent,
                noPeople: state.noPeople,
                handleTipPercent: handleTipPercent,
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