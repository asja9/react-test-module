/*Para definir un componente debe ser el archivo en Mayus*/

/*Para poder usar JSX nesecito importar react */
 import React, { Fragment } from "react";
 /**Para poder realizar la validacion */
 import PropTypes from 'prop-types';


 /*Definicion de la aplicacion
   paso un parametro en la aplicacion y aplico deestructuracion*/
const PrimeraApp = ( {mensaje, subTitulo}) =>{


    const saludo = 'Hola perro';
    //console.log(mensaje);

    //Return de los resultados, en parentesis si son varias lineas.
    //El retorno html deberia ser envuelto en un div padre
    /*JSX dse reqiere React exportado*/
    /*
    return (
            <div>
             <h1>Hola mundo</h1>
             <h2>Hola React</h2>
            </div>
          );
    */
    //Si no quiero agregar div, se resuelve con fragment
    /*
    return (
        <Fragment>
         <h1>Hola mundo</h1>
         <h2>Hola React</h2>
        </Fragment>
      );
    */
    
    /*Forma resumida de envolver*/
      return (
        <>
         <h1>{saludo}</h1>
         <h2>{mensaje}</h2>
         <h3 id="sub">{subTitulo}</h3>
        </>
      );
}

/** Validacion de los parametros de entrada */
PrimeraApp.propTypes = {
    mensaje: PropTypes.string.isRequired
}

//Parametros por default de mu modulo
PrimeraApp.defaultProps = {
  subTitulo: 'Soy un canijo subtitulo'
}


export default PrimeraApp;