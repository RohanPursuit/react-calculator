const findParen=(expression, start)=>{
    start = start + 1
    let openParen = 1
    let closeParen = 0
    let step = 1
    if(expression[start-1] === ')'){
        start = start - 2
        closeParen = 1
        openParen = 0
        step = -1
    }
    let index = start
    for(let i = start; i <expression.length; i=i+step){
        if(expression[i] === '('){
            openParen= ++openParen
        } else if (expression[i] === ')'){
            closeParen = ++closeParen
        }
        const complete = openParen - closeParen === 0
        if(complete){
            index = i
            break
        }
    }

    return index
}

export default findParen