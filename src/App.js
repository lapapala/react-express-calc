import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
      this.state = { 
        apiResponse: "", 
        answer: "",
        inputValue: ""
      };
      
    }
    callAPI() {
      fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
    }
    componentWillMount() {
        this.callAPI();
    }

    result = () => {
      fetch("http://localhost:9000/division/2/2")
        .then(res => res.text())
        .then(res => this.setState({ answer: res }));
    }

    // input = () => {
    //     this.refs.input.value
    // }

  render() {
    return (
      <div className="App">
        <header className="App-header">

            <label>
              Enter your example 
              <input  className="input" type="text" name="name" value={this.state.inputValue} />
            </label>

            <button onClick={this.result} >Calculate</button>

            <label>
              Result 
              <input className="input" type="text" name="name"  value={this.state.answer} onChange={() => {}} />
            </label>
       
        </header>
      </div>
    );
  }
  
}

export default App;
