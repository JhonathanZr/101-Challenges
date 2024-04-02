let chain = "Agrega codigo morse :)"
.toLowerCase()

//Traemos el JSON en una funcion async para utilizarlo luego
async function loadData (){
    const response = await fetch('/010_Codigo_Morse/morse.json')
    const dataJSON = await response.json()
    return dataJSON
}

//Utilizamos 1 sola función para hacer todo lo pedido en el ejercicio
async function translate2 (){
    //traemos el JSON ahora en la variable data
    const data = await loadData()
    //Creamos una experesion regular para identificar si entra un texto normal o el codigo morse
    let morseRegExp = RegExp("([a-zA-Z0-9])")
    let coincidence = ""
    //Con la RegExp verificamos con el .test()
    if(morseRegExp.test(chain) === true) {
        for(const words of chain){
            //Traemos cada valor de la chain para pasarla por la condición de letra, numero o simbolo
            if(words >= "a" && words <= "z"){
                //Utilizamos el slice(1,-1) para eliminar las comillas del valor de cada key del objeto
                coincidence = `${coincidence} ${JSON.stringify(data.alphabet[words]).slice(1, -1)}`
            } else if(words >= "0" && words <= "9"){
                coincidence = `${coincidence} ${JSON.stringify(data.numbers[words]).slice(1,-1)}`
            }else{
                coincidence = `${coincidence} ${JSON.stringify(data.symbols[words]).slice(1, -1)}`
            }
        }

        //Acá es donde traducimos el codigo morse a alfabeto
    }else {
        //Creo estas variables para guardar los objetos y luego hacerle un assign
        //Probablemente se pueda hacer mejor pero estoy pollito xd
        let alphabet = data.alphabet
        let numbers = data.numbers
        let symbols = data.symbols
        let codeMorse = Object.assign(alphabet, numbers, symbols)
        
        //uso un forOf para recorrer la chain separando los " "
        for(const morse of chain.split(" ")){
            //ahora recorremos el objeto creado para buscar una comparativa con el morse
            for (const key in codeMorse){
            //al existir la comparativa concateno la key y listonga
                if(alphabet[key] == morse){
                    coincidence = `${coincidence}${key}`
                }
            }
        }
    }
    console.log(coincidence)

}

translate2()





async function translate () {
    let morseRegExp = RegExp("([a-zA-Z0-9])")
    const data = await loadData()
    let character;
    let coincidence = ""    
    if(morseRegExp.test(chain) === true) {
        for (let i = 0; i < chain.length; i++) {
            if(chain.charAt(i) >= "a" && chain.charAt(i)  <= "z"){
                character = chain.charAt(i)
                coincidence = `${coincidence} ${JSON.stringify(data.alphabet[character]).slice(1, -1)}`
            }else if(chain.charAt(i) >= "0" && chain.charAt(i) <= "9"){
                character = chain.charAt(i)
                coincidence = `${coincidence} ${JSON.stringify(data.numbers[character]).slice(1, -1)}`
            }
            else{
                character = chain.charAt(i)
                coincidence = `${coincidence} ${JSON.stringify(data.symbols[character]).slice(1, -1)}`
            }
        }
        console.log(coincidence)
    } else{
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            
        }

    }
}

//translate()