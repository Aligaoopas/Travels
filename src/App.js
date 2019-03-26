import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Quote from "./Quote";
import Lamp from "./lamp";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

  this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={this.state.isToggleOn ? 'App-logo-working' : 'App-logo-sleeping'} alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>
        <Lamp on />

        <Quote
          quote="I believe the children are the future... Unless we stop them now!"
          character="Homer Simpson"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
        />
        <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'Jappuie sur des boutons' : 'Je suis chez Moe'}
      </button>
      </div>
    );
  }
  
}



export default App;
