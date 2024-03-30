let firstWord = 'amor'
let secondWord = 'roma'

function anagrama () {
    if (firstWord.length === secondWord.length)
    {
        let splitFirstWord = firstWord.split('')
        let splitSecondWord = secondWord.split('')
        let firstReverse = splitFirstWord.reverse()
            if(firstReverse.toString() === splitSecondWord.toString())
            {
                console.log('Es un Anagrama')
            }else {console.log('No son Anagrama')}

    } else console.log('Las palabras son de longitud distintas')
    
}

anagrama()