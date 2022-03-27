import CalculatorContext from "../../context/CalculatorContext";
import { Fragment, useContext, useEffect } from "react";
const PercentBtn = (props) => {
  const calcContext = useContext(CalculatorContext);
  const { handleTipPercent } = calcContext;
  const { iD, value } = props;

  useEffect(() =>{
  }, [value]);

  return (
    <Fragment>
        <input type="radio" onClick={e => handleTipPercent(e)}
        value={value} id={iD} name="tipCalc" className="radio_input"/>
            <label htmlFor={iD} className="radio_label">
            <span>{value}%</span>
        </label>
    </Fragment>
  )
}

export default PercentBtn;