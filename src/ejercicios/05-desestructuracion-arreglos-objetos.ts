/*
    ===== Código de TypeScript =====
*/


interface IReproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: IDetalles
}

interface IDetalles {
    autor: string;
    anio: number;
}

const mireproductor: IReproductor = {
    volumen: 75,
    cancion: 'La chica del barrio',
    segundo: 125,
    detalles: {
        autor: 'Los sonideros',
        anio: 2019
    }
}

// Desestructuración de objetos:
// Evita el tener que declarar objeto.propiedad para acceder a sus valores
// La intensión es crear constantes para almacenar el valor de las propiedades de un determinado objeto

// Una constante en mi código
const cancion = 'La otra mujer rockera';

// Toma el objeto mireproductor, y recuperame el valor de ciertas propiedades
// Podemos dar un nombre diferente a la constante si esta ya existe previamente en nuestro código propiedad: nuevoNombreConstante
// Aqui el orden no importa, solo basta mencionar el nombre de las propiedades a recuperar
const { volumen, segundo, cancion: pista, detalles } = mireproductor;

// Para desestructurar objetos anidados se sigue la misma nomenclatura
// Toma mi objeto detalles que se obtuvo en la instrucción anterior y recuperame las siguientes propiedades
const { autor, anio } = detalles;

// Otra forma es hacerlo en una sola linea, pero tiende a complicarse el código
// objetoAnidado: { propiedades }
const { volumen: vol, segundo: seg, cancion: track, detalles: {autor: author, anio: year} } = mireproductor

console.log('El volumen actual es de:', volumen);
console.log('El segundo actual es:', segundo);
console.log('La canción global es:', cancion);
console.log('La canción almacenada en mi objeto es:', pista)
console.log('El autor de la canción es:', autor);
console.log('Este éxito es del año:', anio)


// Desestructuración de Arreglos
// Permite obtener el valor que guardan ciertas posiciones en el arreglo en constantes
// Aqui no importa el nombre, lo que importa es la posición del valor

const dbz: string[] = ['Son Goku', 'Vegeta', 'Trunks', 'Gohan', 'Goten'];
// Aqui la desestructuración de arreglos es mediante corchetes y no llaves
// Toma el arreglo dbz, y recuperame el valor de cada posición en las constantes
const [ songoku, srvegeta, trunks, songohan, goten ] = dbz
// Solo algunos valores
const [ , , , , mistico] = dbz;

console.log('Primer personaje', songoku)
console.log('Segundo personaje', srvegeta)
console.log('Tercer personaje', trunks)
console.log('Cuarto personaje', songohan)
console.log('Quinto personaje', goten)
console.log('El utlimo hijo de goku es', mistico)