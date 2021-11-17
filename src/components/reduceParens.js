import reduceProd from './reduceProd'
import reduceSum from './reduceSum'
import operation from './operation'

const reduceParens = (expression) => {
    expression = expression.replace(/(\()(?!.*\1)(.*?)\)/, (...args) => {
        let [,,p1] = args
        while(/[×÷]/.test(p1)){
            p1 = reduceProd(p1)
        }
        if(Number(p1)) return 1*p1
        while(/[+-]/.test(p1)){
            if(Number(p1)) return 1*p1
            p1 = reduceSum(p1)
        }

        return operation(p1)
    })
    return expression
}

export default reduceParens