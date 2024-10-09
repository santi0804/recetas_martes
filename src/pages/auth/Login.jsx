import React, { useState } from "react";
import './Login.css';


let urlUsuarios = "http://localhost:3000/usuarios"




const Login = () => {

     const [usuario, setUsuario] = useState('');
     const [contraseña, setContraseña] = useState('');
     const [usuarios, setUsuarios] = useState([]);    /*El estado por defecto es un arreglo vacio */

     function getUsuarios (){
        fetch ('http://localhost:3000/usuarios')
        .then(response => response.json())
        .then(json => console.log(json))
        
     }


    
    function signIn(){      /*Esta es la funcion del login- con la function regular*/
        if(usuario == 'Rogelio' && contraseña == '123456') {
            alert('Inicio de sesión correcto')
        }
        else{
            alert('Error al ingresar')
        }
    }

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