
/*
test( 'Debe ser true', () =>{

    const  isActive = true;

    if(isActive){
        throw new Error('No esta activo');
    }

})
*/

/**Ya tiene integrado jest para la prubas, 
me va ahorra mi funcion de comparacion*/
describe('Pruebas en el archivo demo.test.js', () =>{

    test('Deben ser iguales los string',  () =>{
    
        //1 Inicializacion
        const mensaje = "Hola mundo";
        //2 Estimulo
        const mensaje2 =  "Hola mundo";
        //3 Observar el comportamiento, si son iguales
        expect(mensaje).toBe(mensaje2);  
    })


})

