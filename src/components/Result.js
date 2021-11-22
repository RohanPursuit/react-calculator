import {Component} from 'react'
import '../App.css';
import findParen from './findParen'
import exponents from './exponents'
import parens from './parens'
import reduceStr from './reduceStr'

export default class Result extends Component {

    calculate(expression, isOpenParen){
        console.log(expression)
        if(isOpenParen !== 0) return 0
        while(expression.includes('^')){
            const opIndex = expression.indexOf('^')
            let startReplace = opIndex -1
            let firstNumStart = startReplace
            let firstNumEnd = opIndex
            if(expression[startReplace] === ')'){
                startReplace = findParen(expression, startReplace)
                firstNumStart = startReplace + 1
                firstNumEnd = opIndex - 1
            }
            let secondNumStart = opIndex + 1
            let endReplace = opIndex + 1
            let secondNumEnd = opIndex + 2
            if(expression[endReplace] === '('){
                endReplace = findParen(expression, endReplace)
                secondNumStart = opIndex + 2
                secondNumEnd = endReplace
            }
            // const range = endReplace - startReplace
            expression.splice(startReplace, endReplace+1, exponents(expression.slice(firstNumStart, firstNumEnd), expression.slice(secondNumStart, secondNumEnd)))
        }
        
        parens(expression)
    
        reduceStr(expression)
    
        return Number(expression[0]).toLocaleString()
    
    }

    render() {
        const {expression, isOpenParen} = this.props
        return this.calculate(expression, isOpenParen)
    }
}