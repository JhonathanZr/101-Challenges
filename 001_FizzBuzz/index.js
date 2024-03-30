let numbers = []

function numberPrint () {

    for (let i = 1; i <= 100 ; i++) {
        if(i % 3 === 0){
            numbers.push(i + ' Fizz')
        } else if(i % 5 === 0){
            numbers.push(i + ' Buzz')
        }else if(i % 3 === 0 && i % 5 === 0){
            numbers.push(i + ' Fizz Buzz')
        }else{
            numbers.push(i) 
        }
        
    }
    console.log(numbers)

} 
numberPrint()