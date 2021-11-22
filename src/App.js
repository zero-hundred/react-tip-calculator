import logo from "./images/logo.svg";
import Card from "./Card";

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={logo} alt="Splitter Logo" className="header_image"></img>
      </header>

      <Card />
      
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
        Coded by <a href="https://www.github.com/notkijana" target="_blank" rel="noreferrer">Your Name Here</a>.
      </div>
    </div>
  );
}

export default App;
