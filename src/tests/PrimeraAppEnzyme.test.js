import PrimeraApp from '../PrimeraApp';
import React from 'react';

//Libreria para pruebas de modulos
import { shallow } from 'enzyme';


describe('Pruebas en <PrimeraApp> usando Enzyme', () =>{

    //Prueba usando Enzyme
    test("Debe de mostrar <PrimeraApp>correctamente con Enzyme", () =>{
        
        const mensaje = "Hola, soy Goku";
        
        //Shallow se encarga del render HTML realmente me devuleve y contiene todo
        //el HTML de la funcion que se prueba.
        const wrapper = shallow(<PrimeraApp mensaje = {mensaje} />);
        //console.log({wrapper});
        
        //Prueba de instantaneas, compara con un archivo de instantanea de referencia
        //almacenada junto a la prueba- ver carpeta snapshots
        expect(wrapper).toMatchSnapshot()
     
    });  

    //Prueba usando ezyme, revisar el texto dentro de un componente
    test("Debe de mostrar el subtitulo enviado por props", () =>{
        
        const mensaje = "Hola, soy Goku";
        const subTitulo = "Soy un subtitulo";

        const wrapper = shallow(
                <PrimeraApp 
                    mensaje = {mensaje} 
                    subTitulo = { subTitulo}
                />);


        //wrapper almacena todo el HTML y puedo hacer busquedas.
        //.find equivale a un querySelector, recupera el texto en H3
        const textoFromModule = wrapper.find('h3').text();
        //console.log(textoFromModule);

        //Comparar ambos textos
        //expect(textoFromModule).toBe(subTitulo+' con un error');
        expect(textoFromModule).toBe(subTitulo);

        });
        


    
});

        /*comando para ejecutat laa pruebas npm run test*/

    