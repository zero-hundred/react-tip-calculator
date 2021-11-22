import personIcon from "./images/icon-person.svg";
import dollarIcon from "./images/icon-dollar.svg";
import { Component } from "react";

class Bill extends Component {

    render () {
        return (
            <section className="bill card_section">
    
                <div className="bill_base">
                    <h2 className="smallHeader bill_header">Bill</h2>
                    
                    <div className="bill_container--input basePrice">
                        <img src={dollarIcon} className="bill_icon" alt="Dollar Symbol"/>
                        <input className="bill_input price" id="billPrice" type="number" placeholder="0"></input>
                    </div>
                </div>
    
                
                <form className="bill_select">
                    <h2 className="smallHeader bill_header">
                            Select Tip %
                    </h2>
    
                    <div className="bill_container--select">
    
                        <input className="bill_select--input" id="five" name="tipAmount" type="radio" value="5"></input>
                        <label className="bill_select--label" htmlFor="five">
                            <span>5%</span>
                        </label>
                        
                        <input className="bill_select--input" id="ten" name="tipAmount" type="radio" value="10"></input>
                        <label className="bill_select--label" htmlFor="ten">
                            <span>10%</span>
                        </label>
    
                        <input className="bill_select--input" id="fifteen" name="tipAmount" type="radio" value="15"></input>
                        <label className="bill_select--label" htmlFor="fifteen">
                            <span>15%</span>
                        </label>
    
                        <input className="bill_select--input" id="twenty-five" name="tipAmount" type="radio" value="25"></input>
                        <label className="bill_select--label" htmlFor="twenty-five">
                            <span>25%</span>
                        </label>
    
                        <input className="bill_select--input" id="fifty" name="tipAmount" type="radio" value="50"></input>
                        <label className="bill_select--label" htmlFor="fifty">
                            <span>50%</span>
                        </label>
    
                        <input className="bill_select--input" id="custom" name="tipAmount" type="radio"></input>
                        <label className="bill_select--label custom" htmlFor="custom">
                            <input className="bill_select--input-custom" id="customTip" type="number" placeholder="Custom"></input>
                        </label>
    
                    </div>
                </form>
    
                <div className="bill_container peopleNum">
                    <h2 className="smallHeader bill_header">
                        Number of People
                        {/* {this.props.error && <span className='smallHeader bill_header noPeople'>Can't be Zero</span>} */}
                    </h2>
                    
    
                    <div className="bill_container--input peopleNum_container">
                        <img src={personIcon} className="bill_icon" alt="Person Icon"/>
                        <input className='bill_input people' id="peopleNum" type="number" placeholder="0"></input>
                    </div>
                    
                </div>
            
            </section>
        )
    }
}

export default Bill;