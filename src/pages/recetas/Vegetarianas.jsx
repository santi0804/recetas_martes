import { recetasVegetarianas } from "../../data/recetas"
import {Link} from "react-router-dom"
import './Vegetarianas.css'


const Vegetarianas = () => {


  return (
    
    <div className="cards">
      {
        recetasVegetarianas.map((receta) => (
          <section key={receta.id}> 
            {/* <p>Id: {receta.id}</p> */}
            <p>Nombre: {receta.nombre}</p>
            <p>Descripcion: {receta.descripcion}</p>
            <p>Dificultad: {receta.dificultad}</p>
            <p>Tiempo: {receta.tiempo}</p>
            <div>
              <button className="eliminar">Eliminar</button>  {/* se pone etiqueta normal*/}
              <Link className="editar">Editar</Link>
              <Link className="detalle">Detalles</Link>  {/*Navego a otro componento redireciono y pongo otro enlace por eso se renderiza */}

            </div>
          </section>
        ))
      }
    </div>
  )
}

export default Vegetarianas