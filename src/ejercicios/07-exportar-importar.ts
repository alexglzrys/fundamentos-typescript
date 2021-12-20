
// Del archivo declarado, solo me interesa importar IProducto y calcularImpuestoSobreVenta
import { IProducto, calcularImpuestoSobreVenta } from './06-desestructuracion-argumentos';

/*
    ===== Código de TypeScript =====
*/



// Para usar la interfaz IProducto, es necesario declararla en este archivo o importarla.
// Pero para importarla, es necesario que en el archivo donde se declare, este declarada como lista para exportarla
const carritoCompras: IProducto[] = [
    {
        descripcion: 'Smart TV de 48 pulgadas',
        precio: 14899
    },
    {
        descripcion: 'Reloj Casio Digital',
        precio: 299.50
    }
]

// Si no se exportan las cosas, es imposible importarlas
const [ totalCompra, impuesto] = calcularImpuestoSobreVenta(carritoCompras);

console.log('La compra es por: $', totalCompra);
console.log('Impuesto pagado por $', impuesto);
