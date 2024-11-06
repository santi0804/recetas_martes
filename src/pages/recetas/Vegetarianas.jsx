import {Link} from "react-router-dom"
import './Vegetarianas.css'
import { useState, useEffect } from "react"

let urlRecetas = 'http://localhost:3000/vegetarianas'

const Vegetarianas = () => {
  const [recetasVegetarianas, setRecetasVegetarianas] = useState([])

function consultarRecetas() {
  fetch(urlRecetas)
  .then(response => response.json()) // Entonces si tengo respuesta
  .then(json =>setRecetasVegetarianas(json))
  .catch(error => console.log(error));
}

useEffect(()=> {
  consultarRecetas()
}, [])
  


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
              <button className="eliminar">Eliminar</button>  {/* se pone etiqueta normal*/}
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