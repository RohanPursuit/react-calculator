import operation from './operation'

const reduceSum = (expression) => {
    expression = expression.replace(/(-?\d+?\.+?\d+[+-].?\d+?\.+\d+|-?\d+?\.+?\d+[+-].?\d+|-?\d+[+-].?\d+?\.+?\d+|-?\d+[+-].?\d+)/, (...args) => {
        const [,p1] = args
        console.log(p1)
        return operation(p1)
    })
    console.log(expression)
    return expression
}

export default reduceSum