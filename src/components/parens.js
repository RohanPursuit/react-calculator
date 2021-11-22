import reduceStr from './reduceStr'

function parens(expression){
    while(expression.includes('(')){
        const open = expression.lastIndexOf('(')
        const close = expression.indexOf(')', open)
        const range = close - open
        expression.splice(open, range+1, reduceStr(expression.slice(open+1, close)))
    }
    return expression
}

export default parens