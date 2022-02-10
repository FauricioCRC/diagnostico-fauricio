



//! En este archivo voy a explicar los conceptos que recuerdo sobre POO [PRIMERA FASE DEL DIAGNÓSTICO]

// Objeto ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const persona = {
    nombre: 'Juan',
    apellido: 'Hernández',
    edad: 32,
    direccion: {
        pais: 'Costa Rica',
        ciudad: 'Cartago',
        canton: 'El Carmen'
    }
}
// Un objeto es un conjunto de pares Clave : Valor



// Herencia ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

class Mamifero {
    constructor(raza, edad) {
        this.raza = raza;
        this.edad = edad
    }
}

class Humano extends Mamifero {}  //De esta manera se aplica la herencia en POO, al menos esta es la sintaxis en JS


// Capas ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  Este proyecto en sí ya es un ejemplo de capas, pero a nivel de JS si lo que se quiere es modularizar el código, lo ideal es utilizar los modulos de ecma script 6, funcionan de la siguiente manera:

// import {constanteEjemplo} from './modules/constantes.js'
// Y para exportar esa constante:
// export const = 'Panchito'



// Polimorfismo -> no recuerdo
// Abstracción --> no recuerdo
// Encapsulamiento --> no recuerdo