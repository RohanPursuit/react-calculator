import {Component} from 'react'
import '../App.css';
import reduceParens from './reduceParens';
import reduceProd from './reduceProd'
import reduceSum from './reduceSum'

export default class Result extends Component {

    getResult = (expression) => {
        expression = expression.split(" ").join('')
        if(this.props.isOpen > 0 || /[^\d|)]/.test(expression[expression.length-1])){
            return 0
        }

        while(/\(/.test(expression)){
            expression = expression.replace(/\+\+|--/g, '+')
            expression = reduceParens(expression)
        }
    
        // expression = expression.replace(/\)/g, '')
        
        if(Number(expression)) return Number(expression).toLocaleString("en-US")
        
        while(/[×÷]/.test(expression)){
            expression = expression.replace(/\+\+|--/g, '+')
            expression = reduceProd(expression)
        }
        
        if(Number(expression)) return Number(expression).toLocaleString("en-US")
    
        while(/[+-]/.test(expression)){
            expression = expression.replace(/\+\+|--/g, '+')
            expression = reduceSum(expression)
            if(Number(expression)) return Number(expression).toLocaleString("en-US")
        }

    
        return Number(expression).toLocaleString("en-US")
    }

    render() {
        return this.getResult(this.props.expression.join(''))
    }
}