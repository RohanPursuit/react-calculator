const operation = (str) =>{
    console.log(str)
    if(Number(str)) return 1*str
    const [ ,first ,sign, second ] = str.match(/(-?\d+?\.?\d+|-?\d+?\.|-?\d+)(\+|-|×|÷)(.+)/)
    console.log(first)
    console.log(sign)
    console.log(second)
    // const [first=0, second=0] = str.split(sign)
    switch(sign){
        case '+':
            return 1*first + 1*second
        case '-':
            return 1*first - 1*second
        case '×':
            return first * second
        case '÷':
            return first / second
        default:
            break;
       
    }
}

export default operation