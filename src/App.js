import { Component } from 'react';
import './App.css';
import Buttons from './components/Buttons';

class App extends Component {
  constructor(){
    super()
    this.state = {
      currentInput: '',
      userInput: [''],
      result: '',
      replaceCurrent: false,
    }
  }

  handleCurrentInput = (value) => {
    const {currentInput, userInput} = this.state

    if(value === 'AC') {
      this.setState({currentInput: 0, userInput: [''], result: ''})
    } else if(value === '🆇'){
      console.log(userInput)
      userInput.pop()
      this.setState({currentInput: ''})
      userInput.push('')
    } else {
      if(/\d/.test(value) && this.state.replaceCurrent){
      userInput[userInput.length-1] = (value)
      this.setState({currentInput: value, replaceCurrent: false, userInput: userInput})
    }
    else if(/\d/.test(value)){
      userInput[userInput.length-1] = ((currentInput||'') + value)
      this.setState({currentInput: (currentInput||'') + value})
    } else {
      userInput.push(value)
      userInput.push('')
      this.setState({replaceCurrent: true, userInput: userInput})
    }
    // console.log(userInput)
  }
  console.log(userInput.join(''))
  this.handleCalc(userInput.join(''))
  }

  updateUserInput = (event) => {
    console.log(this.state.currentInput)
    const {userInput} = this.state
    this.setState({userInput: userInput})
  }
  
  // handleUserInput = (value) => {
  //   const {userInput, currentInput, result} = this.state;
  //   if(value === '='){
  //     this.setState({currentInput: result})
  //   } 
  //   else if(Number(this.state.userInput) === 0){
  //     this.setState({userInput: value})
  //   }
  //   else {
  //     // this.setState({userInput: userInput + value})
  //     this.setState({userInput: userInput + value})
  //   }
  //   if(value === 'AC'){
  //     this.setState({userInput: 0, currentInput: 0, result: ''})
  //   }
  // }

  handleCalc = (expression) => {
    console.log('ran')
    if ((/\d/).test(expression[expression.length-1])){
      console.log(expression)
      const ans = eval(expression)
      this.setState({result: ans})
    } else {
      this.setState({result: ''})
    }
  }
  
  
  render() {
      return (
        <div className="App">
          <div className="display">
            <div className="current-input">{this.state.currentInput || 0}</div>
            <div className="userInput">{this.state.userInput}
            </div>
            <div className="result">
              {this.state.result}
            </div>
          </div>
          <Buttons handleCalc={this.handleCalc}currentInput={this.handleCurrentInput}/>
      </div>
    );
  }
}

export default App;
