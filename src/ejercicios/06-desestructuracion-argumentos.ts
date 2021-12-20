/*
    ===== Código de TypeScript =====
*/


// Esta interfaz puede ser importada desde cualquier archivo que la requiera
export interface IProducto {
    descripcion: string;
    precio: number;
}

const telefono: IProducto = {
    descripcion: 'Moto G7 Quinta generación',
    precio: 5900
}

const tableta: IProducto = {
    descripcion: 'IPad Air 9 pulgadas',
    precio: 9700,
}

// Función que estará disponible para importar desde otros archivos
// Esta función recibe como parámetro un arreglo de productos de tipo IProducto, y retorna un arreglo de números
export function calcularImpuestoSobreVenta(productos: IProducto[]): number[] {
    let total = 0;
    // Aqui no hace lata indicar el tipo de dato, ya que TS infiere que es del tipo IProducto

    // Desestructuración de Argumentos
    // Podemos desestructurar el objeto que se recibe como argumento de esta funcion (callback)
    // y quedarnos con las propiedades que nos interesan, en este caso solo el precio
    productos.forEach(({ precio }) => {
        total += precio;
    })

    // Retornar un arreglo con el total y el impuesto calculado
    return [total, total * 0.16];
}

const articulos: IProducto[] = [telefono, tableta];

// Como la función nos retorna un arreglo, lo desestructuramos para almacenar en constantes el precio e impuesto
const [totalCompra, impuesto] = calcularImpuestoSobreVenta(articulos);

console.log('Total de la compra $', totalCompra.toFixed(2));
console.log('Impuesto sobre la compra $', impuesto.toFixed(2));