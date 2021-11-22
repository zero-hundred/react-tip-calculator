import { Component } from "react";
import ResetBtn from "./ResetBtn";

class Tip extends Component {
    render() {
        return (
            <section className="tip card_section">
    
                <div className="tip_container">
    
                    <div className="tip_container--duo">
                        
                        <div className="tip_container--tipText">
                            <h2 className="smallHeader tip_header">
                                Tip Amount
                            </h2>
                            
                            <p className="tip_subHeader">
                                / person
                            </p>
                        </div>
    
                        <h3 id="tipPerPerson" className="tip_number">
                            {this.props.tipPerPerson ? ('$' + this.props.tipPerPerson) : "$0.00"}
                        </h3>
                    </div>
    
                    <div className="tip_container--duo">
                        <div className="tip_container--tipText">
                            <h2 className="smallHeader tip_header">
                                Total
                            </h2>
                            <p className="tip_subHeader">
                                / person
                            </p>
                        </div>
    
    
                        <h3 id="finalAmount" className="tip_number">$0.00</h3>
                    </div>
    
                </div>
                
                <ResetBtn/>
                
            </section>
        )
    }
}

export default Tip;