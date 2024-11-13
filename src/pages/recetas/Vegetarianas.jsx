import {Link} from "react-router-dom"
import './Vegetarianas.css'
import axios from "axios";
import Swal from "sweetalert2";     // importa los modales. de Alertas
import { useState, useEffect } from "react"

let urlRecetas = 'http://localhost:3000/vegetarianas';


const Vegetarianas = () => {
  const [recetasVegetarianas, setRecetasVegetarianas] = useState([])

function consultarRecetas() {
  fetch(urlRecetas)
  .then(response => response.json()) // Entonces si tengo respuesta
  .then(json =>setRecetasVegetarianas(json))    // Estas son promesas
  .catch(error => console.log(error));         // Estas son promesas
}

useEffect(()=> {
  consultarRecetas();
}, []);


async function eliminarReceta(id){             //con los Metodos Async y await puedo ejecutar el refresc del sitio.
  await axios.delete(urlRecetas + "/" + id);  // Con este metodo puedo eliminar, combino l URL + '/' + el id
  consultarRecetas();                         // DE ESTA FORMA SE REFRESCA AUTOMATICAMENTE LA PAGINA.
}

function confirmarEliminarReceta(id, nombre) {
  Swal.fire({
    title: "Estas seguro?",
    text: "Se va a eliminar la receta!" + nombre,
    icon: "!! Danger ¡¡",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si_Borralo!"
  }).then((result) => {
    if (result.isConfirmed) {
      eliminarReceta(id);        // =>Funcion eliminar receta
      Swal.fire({
        title: "Eliminar!",
        text: "La receta se eliminó.",
        icon: "success"
      });
    }
  });
}
  
  return (
    
    <div className="cards">
      {
        recetasVegetarianas.map((receta) => (
          <section key={receta.id}>   {/* <p>Id: {receta.id}</p> */}
            <p>Nombre: {receta.nombre}</p>
            <p>Descripcion: {receta.descripcion}</p>
            <p>Dificultad: {receta.dificultad}</p>
            <p>Tiempo: {receta.tiempo}</p>
            <div>
              <button onClick={()=> confirmarEliminarReceta(receta.id, receta.nombre)} className="eliminar">Eliminar</button>  {/* se pone etiqueta normal*/}
              <Link to = {'/editar-receta-vegetariana'} className="editar">Editar</Link>  {/*Asi se redirecciona el enrutador */}
              <Link className="detalle">Detalles</Link>  {/*Navego a otro componento redireciono y pongo otro enlace por eso se renderiza */}
            </div>
          </section>
        ))
      }
    </div>
  )
}

export default Vegetarianas