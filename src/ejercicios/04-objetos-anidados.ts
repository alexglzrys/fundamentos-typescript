/*
    ===== Código de TypeScript =====
*/


/**
 * Cuando se trabaja con objetos anidados, se recomienda crear una interfaz por cada
 * uno de ellos, de esta forma, aseguramos que si el objeto anidado crece en complejidad,
 * esa complejidad se declara en la interfaz de dicho objeto, lo que lo hace más práctico y
 * escalable.
 * 
 */

interface IDireccion {
    calle: string;
    pais: string;
    ciudad: string;
}

interface ISuperHeroe  {
    nombre: string;
    edad: number;
    // Dirección es un objeto anidado que implementa la interfaz IDireccion
    direccion: IDireccion;
    mostrarDireccion: () => string;
}

const goku: ISuperHeroe = {
    nombre: 'Son Goku',
    edad: 37, 
    direccion: {
        calle: 'Montaña Pao',
        pais: 'Japón',
        ciudad: 'Huhan'
    },
    mostrarDireccion() {
        return `${this.nombre} vive en ${this.direccion.calle}, ${this.direccion.pais}`;
    }
}

const direccionGoku = goku.mostrarDireccion();

console.log(direccionGoku);




