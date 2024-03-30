function contarPalabras(texto) {
    // Convertir el texto a minúsculas y eliminar signos de puntuación
    const textoMinusculasSinPuntuacion = texto
    .toLowerCase()
    .replace(/[\.,:;¡!?¿]/g, "");

    // Dividir el texto en palabras
    const palabras = textoMinusculasSinPuntuacion.split(" ");

    // Objeto para almacenar el recuento de palabras
    const recuentoPalabras = {};
    for (const palabra of palabras) {
      // Si la palabra ya está en el objeto, aumentar su recuento
    if (recuentoPalabras.hasOwnProperty(palabra)) {
        recuentoPalabras[palabra]++;
    } else {
        // Si la palabra no está en el objeto, agregarla con un recuento de 1
        recuentoPalabras[palabra] = 1;
    }
    }

    // Mostrar el recuento final de todas las palabras
    for (const palabra in recuentoPalabras) {
    console.log(`Palabra: ${palabra}, Repeticiones: ${recuentoPalabras[palabra]}`);
    }
}

  // Ejemplo de uso
const texto = "Hola mundo, mundo cruel. Hola a todos, mundo.";
contarPalabras(texto);
