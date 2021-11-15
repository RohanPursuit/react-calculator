import {Component} from 'react'
import '../App.css';

export default class Result extends Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         result: ''
    //     }
    // }

    getResult = (str) => {
        console.log('string: ' + str)
        return eval(str)
    }

    render() {
        return <div>{this.getResult(this.props.expression.join(''))}</div>
    }
}