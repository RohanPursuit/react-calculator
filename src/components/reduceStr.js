

function reduceStr(expression){
    console.log(expression)
    while(expression.join('').match(/[×÷]/)){
        const opIndex = expression.indexOf('×') === -1 ? expression.indexOf('÷') : expression.indexOf('×')
        const op = expression[opIndex]
        if(op === '÷'){
            const ans = Number(expression[opIndex-1]) / Number(expression[opIndex+1])
            expression.splice(opIndex-1, 3, ans)
        } else if(op === '×'){
            const ans = Number(expression[opIndex-1]) * Number(expression[opIndex+1])
            expression.splice(opIndex-1, 3, ans)
        }
    }
    
    while(expression.join('').match(/\+|-/)){
        const opIndex = expression.indexOf('+') === -1 ? expression.indexOf('-') : expression.indexOf('+')
        const op = expression[opIndex]
        if(op === '-'){
            const ans = Number(expression[opIndex-1]) - Number(expression[opIndex+1])
            expression.splice(opIndex-1, 3, ans)
        } else if(op === '+'){
            const ans = Number(expression[opIndex-1]) + Number(expression[opIndex+1])
            expression.splice(opIndex-1, 3, ans)
        }
    }

    return expression[0]
}

export default reduceStr