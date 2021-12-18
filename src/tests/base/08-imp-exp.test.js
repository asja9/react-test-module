//1250
//Informacion
import heroes from '../../data/heroes';
//Archivo a ser testeado
import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';

describe('Pruebas en funciones heroes por id', () =>{

    test('Debe retornar un heroe por id', ()=>{

        const id = 1;
        const heroe = getHeroeById(id);

        //voy a buscar manualmente 
        const heroeData = heroes.find( (heroe) => heroe.id === id);
        console.log({heroe});
        console.log({heroeData});

        expect(heroe).toEqual(heroeData);
    }) 

    test('Debe retornar un undefined si Heroe existe', () => {
        const id = 99;
        const heroe = getHeroeById(id);

        console.log(heroe);

        expect(heroe).toBe(undefined);
    })

    //Debe de retornar un arreglo con los heroes DC
    //owner
    //toEqual al arreglo filtro
    test('Debe retornar un arreglo con los heroes DC', () =>{
        const owner = 'DC';
        //Datos de funcion a evaluar
        const dataOwner = getHeroesByOwner(owner);

        const resultExperado = [
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ];

        expect(resultExperado).toEqual(dataOwner);

        console.log({resultExperado});
        console.log({dataOwner});
        
    })

    //Debe de retornar un arreglo con los hereoes de marvel
    //Lengt = 2 // tobe
    test('Debe de retornar un arreglo con los heroes de Marver', () =>{
        const owner = 'Marvel';
        const leghtShouldBe = 2;
        const dataOwner = getHeroesByOwner(owner);

        expect(dataOwner.length).toBe(leghtShouldBe);
        console.log(dataOwner.length);
    })

    //Pruebas de taras asincronas
})