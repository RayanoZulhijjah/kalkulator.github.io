let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

const inputNumber = (number) => {
    if (currentNumber == '0') {
        currentNumber = number
    } else {
        currentNumber += number
    }
}
//--01-----------CALC SCREEN & UPDATE-------------
const calculatorScreen = document.querySelector ('.calculator-screen')
const updateScreen = (number) => {
    calculatorScreen.value = number
}

//--02-----------NUMBER EVENTS--------------------
const numbers = document.querySelectorAll(".number")
numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

//--03-----------OPERATOR EVENTS--------------------
const operators = document.querySelectorAll(".operator")
operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})
const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = '0'
}

//--04------------CALCULATION-------------------------
const equalSign = document.querySelector('.equal-sign')
equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentNumber)
})

const calculate = () => {
    let result = ''
    switch(calculationOperator) {
        case "+" :
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case "-" :
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break
        case "*" :
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break
        case "/" :
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break
        default:
            return                
    }
    currentNumber = result
    calculationOperator = ''
}

const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

//--05----------------SC BUTTON----------------------------

const clearBtn = document.querySelector('.all-clear')
clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})
//--06-------------DECIMALS--------------------------------
inputDecimal = (dot) => {
    if (currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}

const decimal = document.querySelector('.decimal')
decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})
//--07-------------PERCENTAGE------------------
inputPercentage = (percentage) => {
    if(currentNumber.includes('%')) {
        return
    }
    currentNumber = currentNumber / 100
}

const percentage = document.querySelector('.percentage')
percentage.addEventListener('click', (event) => {
    inputPercentage(event.target.value)
    updateScreen(currentNumber)
})
