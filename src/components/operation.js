const operation = (str) =>{
    if(Number(str)) return 1*str
    const [ ,sign ] = str.match(/\d([\+\-×÷])/)
    const [first=0, second=0] = str.split(sign)

    switch(sign){
        case '+':
            return 1*first + 1*second
        case '-':
            return 1*first - 1*second
        case '×':
            return first * second
        case '÷':
            return first / second
       
    }
}

export default operation