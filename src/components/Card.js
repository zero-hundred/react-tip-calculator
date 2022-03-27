/* eslint-disable react-hooks/exhaustive-deps */
import personIcon from "../images/icon-person.svg";
import dollarIcon from "../images/icon-dollar.svg";
import {useContext, useRef, useEffect} from 'react';
import CalculatorContext from '../context/CalculatorContext';
import PercentBtn from './percentBtns/PercentBtn';

const Card = () => {
    const calculatorContext = useContext(CalculatorContext);

    // For custom percentage input
    const customInput = useRef(null);
    function checkFocus() {
      customInput.current.checked = true;
    }
    // Context Variables
    const { noPeople, tipEach, totalEach, handlePeople, 
      handleStartPrice, isEmpty, handleTipPercent, tipPercent, people,
      startPrice, checkError, checkForm} = calculatorContext;

    // Runs after States update
    useEffect(() => {
      checkForm();
      checkError();
    }, [tipPercent, startPrice, people])

  return (
    <main className="card">
{/* Starting price container */}
      <section className="bill container">

        <div className="bill_numberInput">
          <h2 className="smallHeader bill">Bill</h2>

          <div className="container_numInput">
            <img src={dollarIcon} className="input_icon" alt="Icon for Dollar"/>
            <input type="text" id="startPrice" className="num_input" onChange={e => handleStartPrice(e)}/>
          </div>

        </div>
        <div className="bill_buttons">
        <h2 className="smallHeader bill">Select Tip %</h2>

    {/* Tip Input & Labels container */}
        <div className="container_tipBtns">
            <PercentBtn iD="five" value={5} />
            <PercentBtn iD="ten" value={10} />
            <PercentBtn iD="fifteen" value={15} />
            <PercentBtn iD="twenty-five" value={25} />
            <PercentBtn iD="fifty" value={50} />

    {/* Custom Tip container */}
            <input type="radio" ref={customInput} id="custom" name="tipCalc" className="radio_input custom"></input>
            <label htmlFor="custom" className="radio_label custom">
                <input type="text" onChange={e => handleTipPercent(e)}  onClick={() => checkFocus()} 
                placeholder="Custom" name="tipCalc" className="text_input" id="customTip"/>
            </label>
            </div>
        </div>


    {/* # of PEOPLE INPUT */}
        <div className="bill_numberInput">

          <h2 className="smallHeader bill">
            Number of People 
            {noPeople && <span className="noPeople--header">Can't be Zero</span>}
          </h2>

          <div className="container_numInput">
            <img src={personIcon} className="input_icon" alt="Icon for Person"/>
            
            { noPeople 
              ? <input type="text" id="peopleNum" className="num_input noPeople" onChange={e => handlePeople(e)} />
              : <input type="text" id="peopleNum" className="num_input" onChange={e => handlePeople(e)} />
            }
            
          </div>

        </div>

      </section>

    {/* TIP OUTPUT SECTION BEGINS ---- TIP OUTPUT SECTION BEGINS */}
      <section className="tip container">

        <div className="container_pricePer">

          <div className="tip_container tipPer">
            <div className="tip_container--tipText">
                <h2 className="smallHeader tip_header">Tip Amount</h2>
                <p className="tip_subHeader">/ person</p>
            </div>
            <h3 id="tipPerPerson" className="tip_number">{'$' + tipEach.toFixed(2)}</h3>
          </div>

          <div className="tip_container totalPer">
            <div className="tip_container--tipText">
                <h2 className="smallHeader tip_header">Total</h2>
                <p className="tip_subHeader">/ person</p>
            </div>
            <h3 id="totalPerPerson" className="tip_number">{'$' + totalEach.toFixed(2)}</h3>
          </div>
        </div>

        {/* CHECKS FOR INPUTS ---- CHECKS FOR INPUTS */}
        {isEmpty ? 
          <button className="empty" id="resetBtn">Reset</button>
          : <button onClick={() => window.location.reload()} id="resetBtn">Reset</button>
        }
        

      </section>
    </main>
  )
}

export default Card;