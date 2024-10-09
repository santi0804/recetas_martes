import React, { useState } from "react";
import './Login.css';


const Login = () => {

     const [usuario, setUsuario] = useState('');
     const [contraseña, setContraseña] = useState('');
    
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