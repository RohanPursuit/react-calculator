import { Component } from 'react';
import './App.css';
import Buttons from './components/Buttons';

class App extends Component {
  constructor(){
    super()
    this.state = {
     userInput: '',
     currentInput: '',
     result: '',
     replaceCurrent: false,
    }
  }

  handleCurrentInput = (value) => {
    const {currentInput} = this.state
    if(/\d/.test(value) && this.state.replaceCurrent){
      this.setState({currentInput: value, replaceCurrent: false})
    }
    else if(/\d/.test(value)){
      this.setState({currentInput: currentInput + value})
    } else {
      this.setState({replaceCurrent: true})
    }
  }
  
  handleUserInput = (value, isEqual) => {
    const {userInput, currentInput, result} = this.state
    if(isEqual){
      this.setState({currentInput: result})
    } 
    if(Number(this.state.userInput) === 0){
      this.setState({userInput: value})
    }
    else {
      this.setState({userInput: userInput + value})
    }
    if(isEqual === "AC"){
      this.setState({userInput: 0, currentInput: 0, result: ''})
    }
  }

  handleCalc = (expression) => {
    if ((/\d/).test(expression[expression.length-1])){
      const ans = eval(expression)
      this.setState({result: ans})
    }
    if(!expression.length){
      this.setState({result: expression})
    }
  }
  
  
  render() {
      return (
        <div className="App">
          <div className="display">
            <div className="current-input">{this.state.currentInput || 0}</div>
            <div className="userInput">{this.state.userInput || 0}
            </div>
            <div className="result">
              {this.state.result}
            </div>
            </div>
          <Buttons handleCalc={this.handleCalc} userInput={this.handleUserInput} currentInput={this.handleCurrentInput}/>
      </div>
    );
  }
}

export default App;
