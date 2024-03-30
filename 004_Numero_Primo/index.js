function numeroPrimo () {
    for (let i = 1; i <= 100; i++) {
        let count = 0
        for (let y = 1; y <= i; y++) {
            if(i % y === 0){
                count++
            }
        }
        if(count <= 2){
            console.log(i + ' Es un número primo')
        } else {
            
            console.log(i + ' No es un número primo') 
        }
        count = 0
    }
}

numeroPrimo()