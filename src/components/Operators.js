export default function Operators() {
    const operators = '+-/*()'
    const arr = operators.split('').map((el, i) => <button className={"oper-"+i} key={i} value={el} name={(/\//.test(el) && "÷")|| 
    (/\*/.test(el) && "×")|| el}>{(/\//.test(el) && "÷")|| 
    (/\*/.test(el) && "×")|| el}</button>)
    return arr
}