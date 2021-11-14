import { Component } from 'react'
import './Buttons.css'


export default class Buttons extends Component {

     buildNumPad = () => {
        const numbers = [7,8,9,4,5,6,1,2,3,0,'.']
        return numbers.map(i => <button className={"num"+i} key={i} value={i}>{i}</button>)
     }

     buildOperationsPad = () => {
         const operations = "AC,+/-,+,-,x,=,/"
         return operations.split(',').map((element, i) => <button className={'oper-'+ i} key={element} value={element}>{element}</button>)
     }
     
    render(){
        return (
            <>
            <section className="numpad">
                {this.buildNumPad()}
            </section>
            <section className="operations-pad">
                {this.buildOperationsPad()}      
            </section>
            </>
        )
    }
}
