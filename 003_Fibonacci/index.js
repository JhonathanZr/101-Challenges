function fibonacci () {
    let n0 = 0
    let n1 = 1
    let numbers = []
    numbers.push(n0)
    numbers.push(n1)
    for (let i = 0; numbers.length < 50 ; i++) {
        let newNumber = n0 + n1
        n0 = n1
        n1 = newNumber
        numbers.push(newNumber)
        
    }
    console.log(numbers)
}

fibonacci()