function decimalToBinary () {
    let number =  40
    let newNumber = number
    let arrayBinary = []
    let binary = ""
    
    do {
        arrayBinary.push(Math.trunc(newNumber % 2))
        newNumber = newNumber / 2
    } while (newNumber > 1);
    arrayBinary.reverse()
    for (let i = 0; i < arrayBinary.length; i++) {
        binary = `${binary}${arrayBinary[i]}`
    }
    binary = Number(binary)
    console.log(binary)

}

decimalToBinary()
