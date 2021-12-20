
/*
    ===== Código de TypeScript =====
*/

// En este punto, esta función recibe un argumento del tipo cualquiera (any), y retorna un tipo cualquiera (any)
// No se recomienda

// function queTipoSoy(argumento) {
//     return argumento;
// }

// Los genericos permiten especificar que la función o metodo recibe un tipo de dato GENERICO
// No confundir con CUALQUIERA
// En este punto la función recibe un argumento de <Tipo generico> (string, numero, boolean)
// y el argumento debe ser de ese tipo <Tipo Generico>
// T es un estandar para especificar tipo generico
// Tambien podemos especificar que la función retorne un tipo de deato en especifico (): string, o generico ():
function queTipoSoy<T>(argumento: T) {
    return argumento;
}

// Quien decide el tipo es la parte donde se invoca (en este caso es un string)
let soyString = queTipoSoy('Hola mundo');
let soyNumero = queTipoSoy(100);
let soyBoolean = queTipoSoy(true);
let soyArreglo = queTipoSoy([1,2,3,4,5])

// Tambien podemos especificar explicitamente el tipo de dato que se espera obtener
let soyOtroString = queTipoSoy<string>('Bienvenidos a TS')

console.log(soyString, soyNumero, soyBoolean, soyArreglo, soyOtroString)