/*Importo el archivo con el codigo que voy a testear*/
import {getSaludo} from '../../base/02-template-string';

/*Describir mi prueba*/
describe("Pruebas en 02-template-string.js", () =>{

    test('getsaludo debe retornar hola fernando', () =>{

        const nombre = "Fernando";
        const saludo = getSaludo(nombre);

        //funcion para testing un valor
        //Pasa la prueba
        expect(saludo).toBe('Hola '+nombre);
        //No pasa la prueba por que no son iguales
        //expect(saludo).toBe('Hola');
    })

})  