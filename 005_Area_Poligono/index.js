function area () {
    let poligono = prompt(`¿Que area de poligono deseas calcular? 
    1: Triangulo
    2: Cuadrado
    3: Rectangulo`)

    let base = prompt(`Ingresa la base del poligono`)
    let altura = prompt(`Ingresa la altura del poligono`)
    let area = 0

    if(poligono === '1'){
        area = base * altura / 2
        alert(`El area del triangulo es: ${area}`)
    }
    else if(poligono === '2' || poligono === '3'){
        area = base * altura
        alert(`El area del cuadrado es: ${area}`)
    }
}

area()