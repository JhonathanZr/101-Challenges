function validarBalance(chain) {
    const pila = [];

    for (const caracter of chain) {
    if (caracter === '{' || caracter === '[' || caracter === '(') {
        pila.push(caracter);
    } 
    else if (caracter === '}' || caracter === ']' || caracter === ')') {
        if (pila.length === 0) {
        return false;
        }
        const ultimoCaracter = pila.pop();
        const parCorrecto = ultimoCaracter === '{' ? '}' : ultimoCaracter === '[' ? ']' : ')';
        if (caracter !== parCorrecto) {
        return false;
        }
    }
    console.log(pila)
    }
    return pila.length === 0;
}

const expresion = "{a+b}(4+5[0-2])";


  console.log(`Expresión balanceada: ${validarBalance(expresion)}`); // true