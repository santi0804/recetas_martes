import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './Login.css';


let urlUsuarios = "http://localhost:3000/usuarios"

const Login = () => {

     const [usuario, setUsuario] = useState('');    /* El singular el usuario*/
     const [contraseña, setContraseña] = useState('');
     const [usuarios, setUsuarios] = useState([]);    /*El estado en "prural" por defecto es un arreglo vacio */
       
     let redireccion = useNavigate()



     function getUsuarios (){     /*Función anclada a la promesa que existe en el index html */
        fetch (urlUsuarios)
                .then(response => response.json())    
                .then(json => setUsuarios(json))
                .catch(error => console.log(error))
        
     }

     useEffect(() => {    /* Siempre recibe 2 parametros una funcion y un arreglo vacios */
         getUsuarios()    /*Esta es la función que quiero que se ejecute dentro de la misa función useeffect */

     }, [])               /*EL arreglo vacio me garantiza que se ejecute solo una unica vez y corta el ciclo infinito */
     console.log(usuarios)  

    
    function signIn(){      /*Esta es la funcion del login- con la function regular*/
        
        if(findUser()) {    /*De esta manera solo necesito el llamado de la función. */
            redireccion('/')  /* Ruta de navegación a mi Dashboard*/
        }                     /*Tener presente  los TimeMouse de animación de cargue antes de Ingresar al dashboard*/
    }
    

    function findUser() {         /*Con el metod some funcion para controlar el login */
         let auth = usuarios.some((item) => item.user == usuario && item.password == contraseña) 
        return auth 
    }

    /*Con el metodo find puedo estraer datos */



    return (
        <form className="form" action="">
            <section className="">

                <div>
                    <label htmlFor="usuario">Usuario</label>
                    <input onChange={(e) => {setUsuario(e.target.value)}} id="usuario" type="text" />  {/*onChange se conoce como un eventoS */}
                </div>
                <br />

                <div>
                    <label htmlFor="password">Contraseña</label>
                    <input onChange={(e) => {setContraseña(e.target.value)}} id="password" type="text"/>
                </div>
                <br />

                <button onClick={signIn} className="button" type="button"> Iniciar sesión</button>
            </section>
        </form>
    )
}

export default Login