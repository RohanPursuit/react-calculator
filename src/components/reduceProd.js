import operation from './operation'

const reduceProd = (expression) => {
    expression = expression.replace(/(-?\d+?\.+?\d+[×÷].?\d+?\.+\d+|-?\d+?\.+?\d+[×÷].?\d+|-?\d+[×÷].?\d+?\.+?\d+|-?\d+[×÷].?\d+)/, (...args) => {
        const [,p1] = args
        return operation(p1)
    })
    return expression
}

export default reduceProd