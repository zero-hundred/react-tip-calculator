import personIcon from "./images/icon-person.svg";
import dollarIcon from "./images/icon-dollar.svg";
import { useState, useEffect, useRef } from "react";
import logo from "./images/logo.svg";

// ----- APP FUNCTION START ----- APP FUNCTION START -----
// ----- APP FUNCTION START ----- APP FUNCTION START -----
// ----- APP FUNCTION START ----- APP FUNCTION START -----
export default function App() {
  const [totalPer, setTotalPer] = useState(0);
  const [tipPer, setTipPer] = useState(0)
  const [tip, setTip] = useState(null);
  const [people, setPeople] = useState(null);
  const [startPrice, setStartPrice] = useState(null);
  const [noPeople, setNoPeople] = useState(null);
  const [isEmpty, setEmpty] = useState(true);

  useEffect(() => {
    checkForm();
    checkError();
  })

  const customInput = useRef(null)

  function checkFocus(element) {
    customInput.current.checked = true;
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
    <div className="App">

      <header className="header">
        <img src={logo} alt="Splitter Logo" className="header_image"/>
      </header>

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

{/* Tip Percentage Buttons */}
        <div className="bill_buttons">
            <h2 className="smallHeader bill">Select Tip %</h2>
      

    {/* Tip Input & Labels container */}
            <div className="container_tipBtns">
              <input type="radio" onClick={e => handleTip(e)} value="5" id="five" name="tipCalc" className="radio_input"/>
              <label htmlFor="five" className="radio_label">
                <span>5%</span>
              </label>

              <input type="radio" onClick={e => handleTip(e)} value="10" id="ten" name="tipCalc" className="radio_input"/>
              <label htmlFor="ten" className="radio_label">
                <span>10%</span>
              </label>

              <input type="radio" onClick={e => handleTip(e)} value="15" id="fifteen" name="tipCalc" className="radio_input"/>
              <label htmlFor="fifteen" className="radio_label">
                <span>15%</span>
              </label>

              <input type="radio" onClick={e => handleTip(e)} value="25" id="twenty-five" name="tipCalc" className="radio_input"/>
              <label htmlFor="twenty-five" className="radio_label">
                <span>25%</span>
              </label>

              <input type="radio" onClick={e => handleTip(e)} value="50" id="fifty" name="tipCalc" className="radio_input" />
              <label htmlFor="fifty" className="radio_label">
                <span>50%</span>
              </label>

    {/* Custom Tip container */}
              <input type="radio" ref={customInput} id="custom" name="tipCalc" className="radio_input custom"></input>
              <label htmlFor="custom" className="radio_label custom">
                <input type="text" onClick={e => checkFocus(e)} onChange={e => handleTip(e)} placeholder="Custom" name="tipCalc" className="text_input" id="customTip"/>
              </label>
            </div>
        </div>

{/* Number of people container */}
        <div className="bill_numberInput">
          <h2 className="smallHeader bill">Number of People {noPeople && <span className="noPeople--header">Can't be Zero</span>}</h2>

          <div className="container_numInput">
            <img src={personIcon} className="input_icon" alt="Icon for Person"/>
            {noPeople ? 
              <input type="text" id="peopleNum" className="num_input noPeople" onChange={e => handlePeople(e)} />
              : <input type="text" id="peopleNum" className="num_input" onChange={e => handlePeople(e)} />
            }
            
          </div>
          
        </div>

      </section>

{/* TIP SECTION BEGINS ---- TIP SECTION BEGINS */}
      <section className="tip container">

        <div className="container_pricePer">

          <div className="tip_container tipPer">

            <div className="tip_container--tipText">
                <h2 className="smallHeader tip_header">Tip Amount</h2>
                <p className="tip_subHeader">/ person</p>
            </div>

            <h3 id="tipPerPerson" className="tip_number">{'$' + tipPer.toFixed(2)}</h3>
          </div>

          <div className="tip_container totalPer">
            <div className="tip_container--tipText">
                <h2 className="smallHeader tip_header">Total</h2>
                <p className="tip_subHeader">/ person</p>
            </div>

            <h3 id="totalPerPerson" className="tip_number">{'$' + totalPer.toFixed(2)}</h3>
          </div>
        </div>

        {isEmpty ? 
          <button className="empty" id="resetBtn">Reset</button>
          : <button onClick={() => window.location.reload()} id="resetBtn">Reset</button>
        }
        

      </section>
    </main>

      
      <div className="App_footer">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
        Coded by <a href="https://www.github.com/notkijana" target="_blank" rel="noreferrer">Not Kijana</a>.
      </div>
    </div>
  );
}
