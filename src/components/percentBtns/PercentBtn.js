import { Fragment } from "react";
const PercentBtn = (props) => {
    const {handleTip, iD, value} = props;
  return (
    <Fragment>
        <input type="radio" onClick={e => handleTip(e)} 
        value={value} id={iD} name="tipCalc" className="radio_input"/>
            <label htmlFor={iD} className="radio_label">
            <span>{value}%</span>
        </label>
    </Fragment>
  )
}

export default PercentBtn;