


const nombre   = 'Fernando';
const apellido = 'Herrera';


// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${ nombre } ${ apellido }`;

//console.log( nombreCompleto );

//Le agrego un export para poderlo usar en mi prueba
export function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

//console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );