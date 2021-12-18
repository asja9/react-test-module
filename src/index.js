/*Importaciones para que mi aplicacion pueda funcionar*/
/**Implemantacion de React */
import React from 'react';
/*Para renderizar en el DOM*/
import reactDom from 'react-dom';
/*Agregar mi componente*/
import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';
/**Importar el CSS de la aplicacion */
import './index.css';

/** Definir el selector que esta el body */
const divRoot= document.querySelector("#root");

/** Renderizar en el DOM (html,selector) */
//ReactDOM.render(saludo,divRoot); 
//ReactDOM.render( <PrimeraApp/>, divRoot);

/**Renderizar pasando un parametro al componente*/
//reactDom.render( <PrimeraApp mensaje = 'Qué haciendo..' />, divRoot);
//reactDom.render( <PrimeraApp mensaje = 'Qué haciendo..' />, divRoot);
reactDom.render( <CounterApp value ={9999}/> , divRoot);