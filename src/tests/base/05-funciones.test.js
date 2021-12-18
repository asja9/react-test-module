import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe("Pruebas en funciones 05-funciones", () =>{

    test('getUser debe de retornar un objeto', () =>{

        const userTest = {            
            uid: 'ABC567',
            username: 'El_Papi1502'
        }

        const user = getUser();
        //Para evaluar objetos debo usar otra funcion to Equal
        expect(user).toEqual(userTest);
    })


    test('getUsuarioActivo debe de retornar un objeto', () =>{

        const userTest =    {
        uid: 'ABC567',
        username: 'asja'
        }

        const user = getUsuarioActivo('asja'); 
        //Para evaluar objetos debo usar otra funcion 
        expect(user).toEqual(userTest);
    }) 

})