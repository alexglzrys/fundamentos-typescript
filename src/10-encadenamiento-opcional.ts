
/*
    ===== Código de TypeScript =====
*/

interface IPasajero {
    nombre: string;
    // Propiedad opcional
    hijos?: string[];
}

const pasajeroA: IPasajero = {
    nombre: 'Alejandro'
}

const pasajero2: IPasajero = {
    nombre: 'Maribel',
    hijos: ['Jonathan', 'Brenda', 'Flor']
}

function imprimirHijos( pasajero: IPasajero ): void {
    // Encadenamiento opcional (secure operator)
    
    // El simbolo ? en TS tiene muchos significados donde se invoque, en este caso estamos evaluando
    // que si la propiedad hijos existe, se obtenga su longitud. En caso de que sea nula o indefinida, se pasa como valor 0
    // Esto ayuda a que JS no lance el error de "no se pudo obtener length de undefined"
    const cuantosHijos = pasajero.hijos?.length || 0;
    console.log(cuantosHijos);
}

imprimirHijos(pasajero2);
imprimirHijos(pasajeroA);