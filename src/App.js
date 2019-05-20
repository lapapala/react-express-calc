import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

	constructor(props) {
		super(props)
		this.state = { 
			apiResponse: "", 
			answer: "",
			inputValue: "",
			num1: 0,
			num2: 0,
			expression: "",
		}
	};
    
    callAPI() {
		fetch("http://localhost:9000/testAPI")
		.then(res => res.text())
		.then(res => this.setState({apiResponse: res}))
		.catch(e => console.log(e))
    }
    componentDidMount() {
        this.callAPI();
    }

    result = () => {
		const {expression,} = this.state
		let operation = ''
		let reg = /[\/,\*,\-,\+]/g
		let divider = expression.match(reg)
		if (divider) {
			switch(divider[0]) {
				case '+':
					operation = 'addition'
					break
				case '-':
					operation = 'subtraction'
					break
				case '*':
					operation = 'multiplication'
					break
				case '/':
					operation = 'division'
					break
				default:
					break
			}
			let splitter = expression.split(divider[0])
			console.log(splitter, operation)
			fetch(`http://localhost:9000/${operation}/${splitter[0]}/${splitter[1]}`)
			.then(res => res.text())
			.then(res => this.setState({ answer: res }))
			.catch(e => console.log(e))
		} else {
			this.setState({answer: 'Ty Durak'})
		}
	}
	
	// resultNew = () => {
	// 	const { expression,} = this.state
	// 	fetch(`http://localhost:8080/expression`, {
	// 		headers: ['Access-Control-Allow-Origin'],
	// 		method: 'POST',
	// 		body: {
	// 			expression
	// 		}
	// 	})
	// 		.then(res => res.text())
	// 		.then(res => this.setState({ answer: res }))
	// 		.catch(e => console.log(e))
	// }

	render() {
		return (
			<div className="App">
				<header className="App-header">

					<label>
						Enter your expression:
						<input className="input" placeholder={'0'} value={this.state.expression} onChange={(exp) => {
							this.setState({expression: exp.currentTarget.value})
						}} />
						<button onClick={() => this.setState({expression: ''})}>Clear</button>
					</label>

					<button onClick={this.result}>Calculate</button>

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
