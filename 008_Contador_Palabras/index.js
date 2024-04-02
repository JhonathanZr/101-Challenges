let words = "Hola mundo mundo cruel, hola a todos, mundo cruel. Mi nombre es Brais, Brais Moure. Brais Moure es un desarrollador."
.replace(/[^a-zA-Z ]/g, "").toLowerCase() //Eliminamos todo simbolo en el string y se coloca LowerCase
let arrayWords = words.split(' ') //Hacemos un array con split

//Función donde crearemos un objeto que guardará una sola vez cada palabra y contará cuanto se repite
function count () {
    const countWord = {} //Objeto donde sucederá la magia

    let finalCount = "" //String donde colocaremos todo el resultado

    for (let word of arrayWords){//Recorremos la palabra de cada index de la array

        if(countWord.hasOwnProperty(word) === true){//Si la palabra ya existe le sumamos el contador
            countWord[word]++

        }else countWord[word] = 1//Si no existe la agregamos con un 1 (como contador)
    }
    for(let word in countWord){//Rrecorremos el objeto
        finalCount = `${finalCount} ${word} ${countWord[word]}, `//Concatenamos todo al string final
    }
    console.log(finalCount)
}

count()