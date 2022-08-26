import React, { useEffect, useState } from 'react'

       {/*Vamos a usar la web reqres in 
        que es una api res de pruebas, que nos va a
        servir para hacer pruebas en nuestro front-end
        Vamos a usar el end-point LIST USERS
        Comenzamos la petición Ajax mediante una promesa: */}

export const AjaxComponent = () => {

  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [errores, setErrores] = useState("");

  //Metodo generio para rellenar array
  const getUsuariosEstaticos = () => {
    setUsuarios([
      {
        "id": 1,
        "email": "feli.rubio@reqres.in",
        "first_name": "Feli",
        "last_name": "Rubio",
      },
      {
        "id": 2,
        "email": "arantxa.rodrigo@reqres.in",
        "first_name": "Arantxa",
        "last_name": "Rodrigo",
      },
      {
        "id": 3,
        "email": "marc.rubio@reqres.in",
        "first_name": "Marc",
        "last_name": "Rubio",
      }
    ]);
  }

  {/*Con el metodo fech podemos recojer la informacion de la API
    como parametro ponemos la url del end-point, devuelve una pomesa la cual vamos
     a trabajar con then*/}

  const getUsuarioAjaxPms = () =>{
    fetch("https://reqres.in/api/users?page=2")
        .then(respuesta => respuesta.json())
        .then(
          resultado_final => {
            setUsuarios(resultado_final.data);
            console.log(usuarios);
        },
        error => {
          console.log(error);
        }
        )

  }

  {/*Vamos a ve otra forma de hacer peticones ajax con away 
    (solo se puede usar dentro de una función asincrona),
     declaramos funcion asincrona async()*/}

  const getUsuariosAjaxAW = () => {

    setTimeout(async() => {
     try{
      const peticion = await fetch("https://reqres.in/api/users?page=2");
      const {data} = await peticion.json();
  
      setUsuarios(data);
      setCargando(false);

     } catch (error){
       console.log(error.message);
       setErrores(error.message);
     }

    }, 2000)

  }

  useEffect(()=>{
    getUsuariosAjaxAW();
  },[]);

  if(errores !== ""){
    return <div className='errores'>
    {errores}
  </div>

  }else if(cargando == true){
    return (
      <div className='cargando'>
        Cargando datos...
      </div>
    );
  }else if(cargando == false && errores === ""){
    return (
      <div>
          <h2>Listado de usuarios via Ajax</h2>
          <ol>
            {
              usuarios.map(usuario => {
                return<li key={usuario.id}> 
                       &nbsp;
                       <img src={usuario.avatar} width="40"></img>
                       &nbsp;    
                               {usuario.first_name}
                               {usuario.last_name} 
                               &nbsp;    
                         Email: {usuario.email}<br/></li>
                               
              })
            }
          </ol>
      </div>
    )
  }
  }
  

  
