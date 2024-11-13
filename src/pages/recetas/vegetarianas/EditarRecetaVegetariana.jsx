import React, { useState } from 'react'
import { useParams } from 'react-router-dom';  // Importación Importante !¡
import axios from 'axios';

let urlRecetas = 'http://localhost:3000/vegetarianas/';  // tener presente el "/" para que pueda traer el id  y la ruta


const EditarRecetaVegetariana = () => {

  const [stateNombre, setStateNombre] = useState("");
  const [stateDescripcion, setStateDescripcion] = useState("");
  const [stateDificultad, SetStateDificultad] = useState(" ");
  const [stateTiempo, setStateTiempo] = useState("");

  // Lo que me construye useParams siempre debe de ser un objeto. y el id va solo.
  let { id } = useParams()    // se crea variable, con el metodo UseParams- que viene de Reac-router-dom
  console.log(id)


  async function consultarRecetarId() {
   let response = await axios.get(urlRecetas + id);
   setStateNombre(response.data.stateNombre);    // Aqui la variable captura los datos con el setStateNombre y lo trae para mostrarlos donde los requerimos
    
  }

  function editarReceta() {


  }

  function confirmarEditarReceta() {


  }



  return (
    <form >
      <input onChange={(e) => setStateNombre(e.target.value)} placeholder="Nombre" type="text" value={stateNombre}/>  {/*Asi me debe de traer el dato hacia el input para editartlo en las vistas */}
      <input onChange={(e) => setStateDescripcion(e.target.value)} placeholder="Descripcion" type="text" />
      <input onChange={(e) => SetStateDificultad(e.target.value)} placeholder="Dificultad" type="text" />
      <input onChange={(e) => setStateTiempo(e.target.value)} placeholder="Tiempo" type="text" />
      <button type="button">Editar</button>
    </form>
  );
};

export default EditarRecetaVegetariana;