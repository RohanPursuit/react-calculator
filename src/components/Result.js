import {Component} from 'react'
import '../App.css';
import reduceParens from './reduceParens';
import reduceProd from './reduceProd'
import reduceSum from './reduceSum'

export default class Result extends Component {

    getResult = (expression) => {
        while(/\(/.test(expression)){
            expression = expression.replace(/\+\+|\-\-/g, '+')
            expression = reduceParens(expression)
        }
    
        // expression = expression.replace(/\)/g, '')
        
        if(Number(expression)) return 1*expression
        
        while(/[×÷]/.test(expression)){
            expression = expression.replace(/\+\+|\-\-/g, '+')
            expression = reduceProd(expression)
        }
        
        if(Number(expression)) return 1*expression
    
        while(/[\+\-]/.test(expression)){
            expression = expression.replace(/\+\+|\-\-/g, '+')
            expression = reduceSum(expression)
            if(Number(expression)) return 1*expression
        }
    
        return Number(expression)
    }

    render() {
        return <div>{this.getResult(this.props.expression.join(''))}</div>
    }
}