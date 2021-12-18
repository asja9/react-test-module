//Debe ser un import o no va manejar bien el error
import { render } from '@testing-library/react';

//no es necesario, para que muestre las ayudas
import '@testing-library/jest-dom'

import PrimeraApp from '../PrimeraApp';
import React from 'react';

//Libreria para pruebas de modulos
import { shallow } from 'enzyme';

//Revisar Dom para la prueba
import '@testing-library/jest-dom/extend-expect';

describe('Pruebas en <PrimeraApp></PrimeraApp>', () =>{

    test('Debe mostrar el mensaje "Hola, soy Goku', () =>{
        const mensaje = "Hola, soy Goku";

        const {getByText} = render(<PrimeraApp mensaje = {mensaje} />);
        
        console.log(getByText);
        expect( getByText( mensaje ) ).toBeInTheDocument();
        //Esperar que exista saludo en el documento

    });
    
    //Prueba usando Enzyme
    test("Debe de mostrar <PrimeraApp></PrimeraApp> correctamente con Enzyme", () =>{
        
        const mensaje = "Hola, soy Goku";
        const wrapper = shallow(<PrimeraApp mensaje = {mensaje} />);
   
        expect(wrapper).toMatchSnapshot()
   
    });
    
});

/*comando para ejecutat laa pruebas*/
    