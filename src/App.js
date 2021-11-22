import { Component } from 'react';
import './App.css';
import Numpad from './components/Numpad';
import Result from './components/Result'

class App extends Component {
  constructor() {
    super()
    this.state = {
      userInput: '',
      expressionArr: [],
      preview: null,

      result: 0,
      isOpenParen: 0,
    }
  }
  onButtonClick = (event) => {
    const {name, value} = event.target
    const {userInput, expressionArr} = this.state
    let { isOpenParen } = this.state
    const isNumber = !!Number(value)
    if(isNumber || value === '.' || value === '0'){
      let expressionArrSlice = expressionArr.slice(0, expressionArr.length-1)
      if(isNaN(Number(expressionArr[expressionArr.length-1]))){
        expressionArrSlice = expressionArr.slice(0, expressionArr.length)
      }
      console.log(expressionArrSlice)
      this.setState({userInput: userInput + value, preview: [...expressionArrSlice, userInput + value], expressionArr: [...expressionArrSlice, userInput + value], result: <Result expression={[...expressionArrSlice, userInput + value]} isOpenParen={isOpenParen}/>})
    }else {
      switch(value){
        case 'AC':
          this.setState({
            userInput: '',
            expressionArr: [],
            display: 0,
            preview: null,
            result: 0,
            isOpenParen: 0
          })
        break;
        case 'C':
          this.setState({userInput: '', preview: expressionArr})
        break;
        case '±':
          this.setState({userInput: -1*(Number(userInput)), preview: expressionArr.slice(0, expressionArr.length-1).join('') + -1*(Number(userInput)), expressionArr: [...expressionArr.slice(0, expressionArr.length-1), "" + -1*(Number(userInput))]})
        break;
        case '=':
          const ans = <Result expression={expressionArr} isOpenParen={isOpenParen}/>
          this.setState({result: ans, userInput: ''})
          break;
        case '(':
          const isParenWithX = Number(expressionArr[expressionArr.length-1]) ? ['×', '('] : ['(']
          this.setState({isOpenParen: ++isOpenParen, expressionArr: [...expressionArr, ...isParenWithX], preview: [...expressionArr, ...isParenWithX], userInput: ''})
          break;
        case ')':
          this.setState({isOpenParen: --isOpenParen, expressionArr: [...expressionArr, value],preview: [...expressionArr, value], result: <Result expression={[...expressionArr, value]} isOpenParen={isOpenParen}/>})
        break;
        case '→':
          let arr = expressionArr.slice(0, expressionArr.length-1)
          if(expressionArr[expressionArr.length-1] === ')'){
            this.setState({isOpenParen: ++isOpenParen})
          } else if(expressionArr[expressionArr.length-1] === '('){
            this.setState({isOpenParen: --isOpenParen})
          }
          if(expressionArr[expressionArr.length-1] === ''){
            expressionArr.slice(0, expressionArr.length-2)
            if(expressionArr[expressionArr.length-2] === ')'){
              this.setState({isOpenParen: ++isOpenParen})
            } else if(expressionArr[expressionArr.length-2] === '('){
              this.setState({isOpenParen: --isOpenParen})
            }
          } 
            let resultArr = arr.slice(0, arr.length)
          if(isNaN(Number(arr[arr.length-1]))){
            resultArr = arr.slice(0, arr.length-1)
          }

          !!expressionArr.length &&
          this.setState({expressionArr: arr, preview: arr, userInput: '', display: 0, result: <Result expression={resultArr} isOpenParen={isOpenParen}/>})
        break;
        case '^':
          let expressionArrSlice = expressionArr.slice(0, expressionArr.length)
      if(isNaN(Number(expressionArr[expressionArr.length-1])) && expressionArrSlice[expressionArrSlice.length-1] !== ')'){
        expressionArrSlice = expressionArr.slice(0, expressionArr.length-1)
      }
          console.log(name)
          this.setState({expressionArr: [...expressionArrSlice, name, '('], userInput: '', preview: [...expressionArrSlice, name, '('], isOpenParen: ++isOpenParen})
        break;
        default:
          let expressionArrSliceOne = expressionArr.slice(0, expressionArr.length)
          if(isNaN(Number(expressionArr[expressionArr.length-1])) && expressionArrSliceOne[expressionArrSliceOne.length-1] !== ')'){
          expressionArrSliceOne = expressionArr.slice(0, expressionArr.length-1)
        }
        if(!!expressionArr.length && !expressionArr[expressionArr.length-1].match(/[()]/)){
          this.setState({expressionArr: [...expressionArrSliceOne, name], userInput: '', preview: [...expressionArrSliceOne, name]})
        }
          
      }
    }
   
  }

  
  render() {
    const {preview, result, userInput} = this.state
    console.log(this.state.expressionArr)
    // console.log(this.state.userInput)
    function showResultOrUserInput(){
      let show = 0
      if(!userInput.length){
        show = result || 0
      }else{
        show = userInput
      }
      return show
    }
    const display = showResultOrUserInput()
      return (
      <div className="App">
        <main className="calculator">
          <section className="display">
          <div className="integer">
            {display}
          </div>
          <span className="expression">
            {preview}
          </span>
          =
          <span className="result">
            {result}
          </span>
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
