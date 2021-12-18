import { retornaArreglo } from "../../base/07-deses-arr";

describe('Pruebas en desestructuracion 07', () =>{

    test('Debe retornar un string y un numero', () =>{

        //El resultado que quiero comparar
        const arrayTest = ['ABC', 123];
        // Desestructuracion del array
        const resultFunction  = retornaArreglo(); //return ['ABC', 123];
        const [letras, numeros]  = retornaArreglo(); //return ['ABC', 123];
        
        //Comparacion de todo 
        expect(resultFunction).toEqual(arrayTest);

        // Comparacion de la desestructuracion, de valor
        expect(letras).toBe('ABC');
        expect(numeros).toBe(123);
        //expect(letras).tobe
        //Comparacion de tipo de dato
        expect(typeof letras).toBe('string');
        expect(typeof numeros).toBe('number');

    })   
    
})   