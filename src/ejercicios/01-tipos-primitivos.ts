/*
    ===== Código de TypeScript =====
*/

/**
 * En este punto mis variables estan declaradas en el ambito global.
 * Si otro archivo declara las mismas variables se ocasiona un error, por tanto
 * es necesario asignarles otro nombre o encapsular su ámbito (esto lo hace angular de forma predeterminada)
 *  */  

// Declarar variables
let nombre: string = 'Super Man';
nombre = 'Son Goku';
// nombre = 36; Esto es imposible, dado que la variable fue tipada como string

// Una variable en TS puede tomar alguno de los tipos de datos especificados con el operador pipe
// En este caso puede ser un número o una cadena
let puntosVida: number | string = 95;
puntosVida = 'Full';

let estaVivo: boolean = false;
estaVivo = true;

console.log(nombre, puntosVida, estaVivo);
