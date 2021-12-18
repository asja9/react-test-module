//Agregando hook use
import React, { useState } from "react";
import PropTypes from 'prop-types';


const CounterApp = ( {value = 100}) =>{


    /**Eventos */
    /*const handleAdd = (event) =>{
         console.log(event);
    }*/

    //UseState-Hook
    /**[variable, funcion] */
    const[counter, setCounter] = useState(0);
    const  handleAdd = () =>{
        setCounter(counter+1);
        //da error counter++, intente cambiar el valor de una constante
        //usando una funcion
        //setCounter( (c) => c + 1 );
    }

    const  handleRemove = () =>{
        setCounter(counter-1);
        //da error counter++, intente cambiar el valor de una constante
        //usando una funcion
        //setCounter( (c) => c + 1 );
    }

    const  handleReset = () =>{
        //usando una funcion
        setCounter( (c) => c = 0 );
    }



    /*
    return (
        <>
         <h1>CounterApp</h1>
         <h2>{value}</h2>
         <button className="btn btn-dark btn-lg" onClick={ (e) => { handleAdd(e) }}>Agrega 1</button>
        </>
      );*/

      return (
        <>
         <h1>CounterApp</h1>
         <h2 className="ct">{value}</h2>
         <h2 id="counter">{counter}</h2>
         <button className="btn btn-dark btn-lg" id="sumar" onClick={ handleAdd }>Agrega 1</button>
         <button className="btn btn-dark btn-lg" id="restar" onClick={ handleRemove }>Remover 1</button>
         <button className="btn btn-dark btn-lg" onClick={ handleReset }>Reset</button>

        </>
      );

}

CounterApp.propTypes = {
    value: PropTypes.number
}



export default CounterApp;

//creacion rapida de la estructura rafcp