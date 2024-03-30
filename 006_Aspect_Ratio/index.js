function calculateMCD () {

    let URL = document.createElement("img")
    URL.src = "https://live.staticflickr.com/3068/3008165544_db916c2c57_b.jpg"
    let num1= URL.width
    let num2= URL.height
    
    let mcd = undefined
    for (let i = 0; i <= num1; i++) {
        let r1 = num1 % i
        let r2 = num2 % i
        if(r1 === 0 && r2 === 0){
            mcd = i
        }
    }
    let ar1 = num1 / mcd
    let ar2 = num2 / mcd

    console.log(`El Aspect Ratio es de: ${ar1}:${ar2}`)
}

calculateMCD()