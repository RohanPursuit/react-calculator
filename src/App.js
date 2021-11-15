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
    }
  }
  onButtonClick = (event) => {
    const value = event.target.value
    const {expression, bool, integer} = this.state
    
    if(value === 'AC'){
        this.setState({
        integer: '',
        expression: [''],
        bool: false,
        result: ''
      })
    } else if (value === "="){
      this.setState({result: <Result integer={this.state.integer} expression={this.state.expression}/>})
    }else {
      if(/±/.test(value)  && /-/.test(integer[0])){
        expression[expression.length-1] = expression[expression.length-1].slice(1)
        this.setState({integer: integer.slice(1), result: <Result integer={this.state.integer} expression={this.state.expression}/>})
      } else if (/±/.test(value)  && !(/-/.test(integer[0]))){
        console.log('ran')
        expression[expression.length-1] = '-' + expression[expression.length-1]
        this.setState({integer: '-' + integer, result: <Result integer={this.state.integer} expression={this.state.expression}/>})
      }

      if(bool){
        expression[expression.length-1] = value
        this.setState({integer: value, bool: false, result: <Result integer={this.state.integer} expression={this.state.expression}/>})
      }
      else if(/\d|\./.test(value)){
        expression[expression.length-1] = this.state.integer + value
        this.setState({integer: this.state.integer + value, result: <Result integer={this.state.integer} expression={this.state.expression}/>})
      } else if (/\+|-|\*|\//.test(value)){
        const name = event.target.name
        expression.push(name)
        expression.push('')
        this.setState({bool: true})
      }
    }
  }
  
  render() {
    console.log(this.state.expression)
      return (
      <div className="App">
        <main className="calculator">
          <section className="display">
          {this.state.integer || 0}
          <div>{this.state.expression}</div>
          {this.state.result}
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
