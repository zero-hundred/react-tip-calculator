import logo from "./images/logo.svg";
import Card from "./components/Card";
import CalculatorState from "./context/CalculatorState";

export default function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={logo} alt="Splitter Logo" className="header_image"/>
      </header>

    <CalculatorState>
      <Card />
    </CalculatorState>

      <div className="footer">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
        Not Coded by <a href="https://www.github.com/notkijana" target="_blank" rel="noreferrer">Kijana</a>.
      </div>
    </div>
  );
}
