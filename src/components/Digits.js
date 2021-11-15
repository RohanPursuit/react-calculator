export default function digits() {
    const numbers = '7894561230.'
    const arr = numbers.split('').map(el => <button className={'num'+el} key={el} value={el}>{el}</button>)
    return arr
}