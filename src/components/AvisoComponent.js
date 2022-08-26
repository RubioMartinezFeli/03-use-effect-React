import React, { useEffect } from 'react'

export const AvisoComponent = () => {

    useEffect(()=>{
        //Cuando se monta
        alert("El componente AvisoComponent esta montado")

        //Cuando se desmonta:
        return() => {
            alert("El componente AvisoComponent esta desmontado");
        }
    }, [])

  return (
    <div>
        <hr/>
        <h3>Saludos Feli, quetal estas</h3>
        <button onClick={ e => {
            alert("Bienvenido!!");
        }}>Mostrar alerta</button>
    </div>
  )
}
