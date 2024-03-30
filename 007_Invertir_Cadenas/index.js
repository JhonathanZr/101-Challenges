function createChain () {
    let chain = "hola mundo"
    let arrayChain = chain.split('')
    let arrayReverse = arrayChain.reverse()
    let newChain = ""
    
    for (let i = 0; i < arrayReverse.length; i++) {
        newChain = newChain + arrayReverse[i]
    }
    console.log(newChain)

}

createChain()