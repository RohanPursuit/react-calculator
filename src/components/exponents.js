import parens from './parens'
import reduceStr from './reduceStr'

function exponents(first, second){
    while(second.includes('(')){
        second = parens(second)
    } 
    while(first.includes('(')){
        first = parens(first)
    } 
    if (second.join('').match(/[+-×÷]/)){
        second = reduceStr(second)
    }
    if (first.join('').match(/[+-×÷]/)){
        first = reduceStr(first)
    }
    return Number(first)**Number(second)
}

export default exponents