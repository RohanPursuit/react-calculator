import { Component } from 'react'
import './Numpad.css'
import Digits from './Digits'
import Operators from './Operators'


export default class Numpad extends Component {
     
    render(){
        return (
            <div className="numbers-operators">
                <section className='numbers' onClick={this.props.click}>
                   <Digits/> 
                </section>
                <section className="operators" onClick={this.props.click}>
                   <Operators/> 
                </section>
                <section onClick={this.props.click}>
                    <button value="AC" className="clear">AC</button>
                    <button className="negative" value="±">±</button>
                    <button value='=' className='equal'>=</button> 
                </section>
                
            </div>
        )
    }
}
