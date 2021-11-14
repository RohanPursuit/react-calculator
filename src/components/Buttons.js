import { Component } from 'react'
import './Buttons.css'


export default class Buttons extends Component {
    constructor(){
        super()
        this.state = {
            expression: ''
        }
    }

    handleCurrentInput = (event) => {
        const exStr = this.props.handleCalc
        const eValue = event.target.value
        const { expression } = this.state
        this.setState({expression: expression + eValue})
        this.props.currentInput(eValue)
        // exStr(expression + eValue)
    }


    // handleOperClick = (event) => {
    //     const userInput = this.props.userInput
    //     const exStr = this.props.handleCalc
    //     const eValue = event.target.value

    //     this.props.currentInput(eValue)

    //     const { expression } = this.state
    //     if((/\+|-|÷|×/).test(eValue)){
    //         let newValue = eValue
    //         if(eValue === '÷'){
    //             newValue = '/'
    //         } else if (eValue === '×'){
    //             newValue = '*'
    //         }
    //         this.setState({expression: expression + newValue})

    //         userInput(eValue)
    //         exStr(expression)
    //     }
    //     if(eValue === '='){
    //         userInput("=")
    //         exStr(expression)
    //     }
    //     if(eValue === 'AC'){
    //         this.setState({expression: ''})
    //         userInput("AC")
    //         exStr('')
    //     }
        
    //   }

     buildNumPad = () => {
        const numbers = [7,8,9,4,5,6,1,2,3,0,'.']
        return numbers.map(i => <button className={"num"+i} key={i} value={i}>{i}</button>)
     }

     buildOperationsPad = () => {
         const operations = "AC,±,+,-,×,=,÷,🆇"
         return operations.split(',').map((element, i) => <button className={'oper-'+ i} key={element} value={element}>{element}</button>)
     }
     
    render(){
        return (
            <>
            <section onClick={this.handleCurrentInput} className="numpad">
                {this.buildNumPad()}
            </section>
            <section onClick={this.handleCurrentInput} className="operations-pad">
                {this.buildOperationsPad()}      
            </section>
            </>
        )
    }
}
