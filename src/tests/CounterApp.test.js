import CounterApp from '../CounterApp';
import React from 'react';
import { shallow } from 'enzyme';


describe('Pruebas en <CounterApp> usando Enzyme', () =>{

    let wrapper = shallow(<CounterApp />);
    // Se usa en todas las pruebas y posiblemente requiero reiniciar el valor
    // dentro de cada test

    //Reinicio
    beforeEach( () => {
       wrapper = shallow(<CounterApp />);
    });




    test("Debe de mostrar <CounterApp> correctamente, hacer match con un snapshot", () =>{  
      
        const counter = 100;
        //Shallow se encarga del render HTML realmente me devuleve y contiene todo
        //el HTML de la funcion que se prueba.
        const wrapper = shallow(<CounterApp contador = {counter} />);
        //Prueba de instantaneas, compara con un archivo de instantanea de referencia
        //almacenada junto a la prueba- ver carpeta snapshots
        expect(wrapper).toMatchSnapshot()
    });  


    //Verificando el defaukl 
    test("Debe de mostrar <CounterApp> el valor por defecto 100", () =>{  
        
        //Se espera que de devuelva un 100
        const valueDefault = '100';
        expect(wrapper).toMatchSnapshot();

        //Trim borra los espacios
        const counterFromModule = wrapper.find('.ct').text().trim();
        expect(counterFromModule).toBe(valueDefault);
    });  

    /* Simulacion de clics */
    test('Debe de icrementar el contador en 3', () =>{


        //Saber el valor antes de simular el clic
        //console.log(wrapper.find('#counter').text()); 
        //Dentro de html que se me devuelve voy a bucar el primer botton
        //Cada linea simula un clic
        wrapper.find('#sumar').simulate('click'); 
        wrapper.find('#sumar').simulate('click'); 
        wrapper.find('#sumar').simulate('click'); 

        const counter = wrapper.find('#counter').text().trim();
        expect(counter).toBe('3');        

    });
    

    test('Debe de decrementar el contador en -3', () =>{

        //Saber el valor antes de simular el clic
        console.log(wrapper.find('#counter').text()); 
        //Dentro de html que se me devuelve voy a bucar el primer botton
        //Cada linea simula un clic
        wrapper.find('#restar').simulate('click'); 
        wrapper.find('#restar').simulate('click'); 
        wrapper.find('#restar').simulate('click'); 
        wrapper.find('#restar').simulate('click'); 

        console.log(wrapper.find('#counter').text()); 

        const counter = wrapper.find('#counter').text().trim();
        expect(counter).toBe('-4');         

    });  

});


    