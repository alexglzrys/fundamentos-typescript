/*
    ===== Código de TypeScript =====
*/

/**
 * 
 * Los parametros de la función pueden ser tipados para que TS obligue a que los
 * valores pasados sean del tipo esperado.
 * 
 * Cuando una función devuelve o retorna un valor, este tambien deberá ser tipado, especificando
 * el tipo de dato que retorna
 * 
 * Todo lo de JS es válido en TS
 * 
 */

function sumar(a: number, b: number): number {
    return a + b;
}

function concatenar(a: string, b: string): string {
    return `${a} ${b}`;
}

const sumarFlecha = (a: number, b: number): number => {
    return a + b;
}

// El orden de los parametros en una función son (obligatorios, opcionales, valor por defecto)
const multiplicar = (a: number, b?: number, base: number = 2) => {
    // La base por defecto es dos, a salvo que se le indique lo contrario
    return a * base;
}

const resultado = sumar(10, 22);

const salida = concatenar('Alejandro', 'González');

const resultadoFlecha = sumarFlecha(25, 11);

// Al tener declarado el segundo parametro como opcional, al invocar la función siempre se le debe pasar el primer argumento
const m1 = multiplicar(5);
const m2 = multiplicar(4, 10)
const m3 = multiplicar(9, 7, 6);

console.log(resultado, salida, resultadoFlecha, m1, m2, m3);



interface IPockemon {
    nombre: string;
    puntosVida: number;
    // El objeto que implemente esta interfaz, deberá definir una función cuyo tipo de retorno es nulo/indefinido
    mostrarInfo: () => void;
}

const pikachu: IPockemon = {
    nombre: 'Pikachu',
    puntosVida: 50,
    mostrarInfo() {
        console.log(`${this.nombre} tiene ${this.puntosVida} puntos de vida`)
    }
}

// Cuando una función no devuelve datos, se especifica como tipo de retorno void
// Si se espera como parámetro un objeto, este debe venir tipado con algun tipo de interfaz
//      Esto nos asegura de que se invoquen las propieades correctas y se afecten con el tipo de dato correcto
const curarPockemon = (pockemon: IPockemon, puntos: number): void => {
    pockemon.puntosVida += puntos;
}

pikachu.mostrarInfo()

// Curar el personaje actual
curarPockemon(pikachu, 75);

pikachu.mostrarInfo()






