import { Component } from 'react';
import './App.css';
import Numpad from './components/Numpad';
import Result from './components/Result'


class App extends Component {
  constructor() {
    super()
    this.state = {
      integer: '',
      bool: false,
      expression: [''],
      result: '',
      isEqual: [''],
    }
  }
  onButtonClick = (event) => {
    const value = event.target.value
    const {expression, bool, integer} = this.state

    const isZero = Number(integer) === 0 && Number(value) === 0

    let isParenComplete = true

    if(/\(/.test(expression)){
      isParenComplete = /(\()(?!.*\1)(.*?)\)/.test(expression.join(''))
      this.setState({result: <Result expression={this.state.expression} isParenComplete={isParenComplete}/>})
    }
    
    if(value === 'AC'){
        this.setState({
        integer: '',
        expression: [''],
        bool: false,
        result: '',
        isEqual: [''],
      })
    } else if (value === "="){
      this.setState({result: <Result expression={this.state.expression} isParenComplete={isParenComplete}/>, isEqual: []})
    }else {
      if(/±/.test(value)  && /-/.test(integer[0])){
        expression[expression.length-1] = expression[expression.length-1].slice(1)
        this.setState({integer: integer.slice(1), result: <Result expression={this.state.expression} isParenComplete={isParenComplete}/>})
      } else if (/±/.test(value)  && !(/-/.test(integer[0]))){
        console.log('ran')
        expression[expression.length-1] = '-' + expression[expression.length-1]
        this.setState({integer: '-' + integer, result: <Result expression={this.state.expression} isParenComplete={isParenComplete}/>})
      }

      if(bool && /\d|\./.test(value)){
        expression[expression.length-1] = value
        this.setState({integer: value, bool: false, result: <Result expression={this.state.expression} isParenComplete={isParenComplete}/>})
      }
      else if(/\d|\./.test(value) && !isZero){
        console.log(isZero)
        expression[expression.length-1] = this.state.integer + value
        this.setState({integer: this.state.integer + value, result: <Result expression={this.state.expression} isParenComplete={isParenComplete}/>})
      } else if (/\+|-|\*|\/|\(|\)/.test(value)){
        const name = event.target.name
        if(!expression[expression.length-1].length){
          expression[expression.length-1] = name
        } else {
          expression.push(name)
        }
        expression.push('')
        this.setState({bool: true})
      }
    }
  }

  handleIsEqual = () => {
    console.log(this.state.result)
    const display = !this.state.isEqual.length ? this.state.result : Number(this.state.integer).toLocaleString('en-US') || 0
    this.state.isEqual.push('')
    return display
  }
  
  render() {
    console.log(this.state.expression)
      return (
      <div className="App">
        <main className="calculator">
          <section className="display">
          <div className="integer">
            {this.handleIsEqual()}
          </div>
          <div className="expression">
            {this.state.expression}
          </div>
          <div className="result">
            {this.state.result}
          </div>
        </section>
          <section className="numpad">
            <Numpad click={this.onButtonClick}/>
          </section>
        </main>    
      </div>
    );
  }
}

export default App;
