/*
    ===== Código de TypeScript =====
*/

/**
 * Siempre se recomienda asignar un solo tipo de dato a una variable.
 * El tener mas de un tipo de dato, solo se usa en casos cuando no tenemos de otra
 * Cuando se usa el tipo any, realmente no estamos usando los beneficios de TS, sería el equivalente
 *      a una codificacion en JavaScript
 */

// Arreglo de string
let habilidades: string[] = ['caminar', 'correr', 'saltar'];
habilidades.push('hablar');

// Arreglo de string, numbers y booleans
let datosVariados: (string | number | boolean)[] = ['cadena', 100, true];
datosVariados.push(8);

// Arreglo de cualquier cosa
let conjuntoCualquiera: any[] = ['alejandro', 36, true, {nombre: 'WinXP', tipo: 'Sistema'}];
conjuntoCualquiera.push(['peras', 'manzanas']);

console.log(habilidades, datosVariados, conjuntoCualquiera)



// Las interfaces permiten asociar un tipo de dato en nuestros objetos de TS
// Estas no se transpilan a JS, no hay equivalente, solo es para tener un mejor control de nuestro codigo en tiempo de escritura

interface IPersonaje {
    nombre: string;
    puntosVida: number;
    estaVivo: boolean;
    habilidades: string[];
    // El simbolo de interrogación le indica a TS que esa propiedad es opcional
    puebloNatal?: string;
}

// Crear un objeto de tipo Personaje
const criatura: IPersonaje = {
    nombre: 'Pickachu',
    estaVivo: true,
    habilidades: ['correr', 'descarga electrica'],
    puntosVida: 10
}

criatura.puebloNatal = 'Cerro Quiltzi';

console.table(criatura);

