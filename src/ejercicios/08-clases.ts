
/*
    ===== Código de TypeScript =====
*/

/**
 * Las clases me permiten crear objetos o instancias.
 * Las interfaces solo permiten declarar un tipo de dato para los objetos.
 * 
 * Las clases pueden implementar metodos, declarar sus propiedades como publicas, privadas, o estaticas
 *      (es decir, se puede acceder a ellas sin necesidad de tener un objeto, directamente desde la clase)
 * Las interfaces no pueden implementar metodos, solo los mencionan, pero la implementación queda del lado del objeto que la implemente.
 * 
 * Por tanto, no hay similitud, son cosas diferentes
 */

class PersonaNormal {
    constructor (public nombre: string, public direccion: string) {}
}

class Heroe extends PersonaNormal {
    // Si las propiedades no llevan modificador de acceso, por defecto son public
    // apodo: string;
    // edad: number;
    // poder: string;
    // nombreReal: string;

    // constructor(apodo: string) {
    //     this.apodo = apodo
    // }

    // En TS podemos crear propiedades para la clase directamente desde el constructor, para ello es necesario especificar su nivel de acceso
    // Esto nos evita el tener que declarar previamente las propiedades, y en el constructor inicializarlas
    // Tambien podemos especificar una propiedad como opcional.. public propiedad?: tipo
    constructor(
        public apodo: string,
        public edad: number,
        public poder: string,
        direccion: string,
        nombreReal: string = 'Desconocido'
    ) {
        // Cuando una clase extiende o hereda de otra es necesario invocar el constructor de la clase padre
        // No coloco el prefijo this.nombreReal | this.direccion, ya que estoy pasando el valor directamente como llega en el constructor
        // De hecho direccion y nombreReal no son propiedades de esta clase, puesto que tienen el modificador de acceso declarado en el constructor
        super(nombreReal, direccion);
    }
}




const ironman = new Heroe('Ironman', 36, 'Cibernetico', 'NY USA', 'Tony');
const kakaroto = new Heroe('Goku', 35, 'Super Sayayin Blue', 'Montaña Pao', 'Kakaroto')
const octagon = new Heroe('Octagón', 62, 'Luchador', 'México');

console.log(ironman, kakaroto, octagon)