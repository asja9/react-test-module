import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe('Pruebas con promesas', () =>{


    // tiene que llevar un done para que no espere
    // ninguna otra accion, tambien add done();
    test('getHeroeByIdAsync debe de retornar un Heroe async', (done) =>{

        const id = 1;

        getHeroeByIdAsync(id).then( heroe => {

             console.log({heroe});
             console.log(heroes[0]);

             expect(heroe).toBe(heroes[0]);
            
             done();
        });
    });

    test('Debe de obtener un error si el heroe id no existe', (done) =>{
        
        const id = 10;

        getHeroeByIdAsync(id).catch( error => {

            console.log(error);
            //Verifica que el return del error sea el mismo
            expect(error).toBe('No se pudo encontrar el héroe');
            done();
        });
        
    });



});