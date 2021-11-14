import { Component } from 'react';
import './App.css';
import Buttons from './components/Buttons';

class App extends Component {
  constructor(){
    super()
    this.state = {
     userInput: '',
     result: '',
    }
  }
  
  handleUserInput = (value, isEqual) => {
    if(isEqual){
      this.setState({userInput: this.state.result})
    } else {
      this.setState({userInput: !value.length ? 0 : this.state.userInput + value})
    }
    if(this.state.userInput === 0){
      this.setState({userInput: value})
    }
  }

  handleCalc = (expression) => {
    if ((/\d/).test(expression[expression.length-1])){
      this.setState({result: eval(expression)})
    }
    if(!expression.length){
      this.setState({result: expression})
    }
  }
  
  
  render() {
      return (
        <div className="App">
          <div className="display">
            <div className="userInput">{this.state.userInput || 0}</div>
            <div className="result">{this.state.result}</div>
            </div>
          <Buttons handleCalc={this.handleCalc} userInput={this.handleUserInput}/>
      </div>
    );
  }
}

export default App;
