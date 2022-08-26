import React, { useEffect, useState } from 'react'
import { AvisoComponent } from './AvisoComponent';

{/*El hook useEffect se usa para desencadenar una acción
 cuando se cargue el componente o se realize un cambio en el
 estado del componente, podemos tener diferentes useEffect*/}

export const PruebasComponent = () => {

const [usuario, setUsuario] = useState("Arantxa");

const [contador, setContador] = useState(0);

const changeUser = e => {
    setUsuario(e.target.value);
}

{/*Si le ponemos [] como segundo parametro solo se ejecuta una vez,
solo al cargar el componente, y si ponemos [estado], solo se ejecutará
cuando cambie el estado que hemos puesto entre corchetes*/}

useEffect(() => {

  console.log("Has cargado el componente PruebasComponent!!");

},[] );

useEffect(()=>{
  
  setContador(contador + 1);
  console.log("Has modificado el usuario!!: " + contador);

}, [usuario]);

  return (
    <div>

        <h1>El efecto - Hook useEffect</h1>
        {/*Vamos a hacer una condición ternaria para que se cambie 
        className dependiendo del valor de contador*/}

        <strong className= { contador >= 10 ? 'label label-green' : 'label' } >{usuario}</strong>
        <input 
            type='text' 
            onChange={ e=> changeUser(e) }
            placeholder = 'Cambia usuario'>    
        </input>

        {/*Condición &&*/}
        { usuario == "Feli" && <AvisoComponent /> }

        
    </div>
  )
}
