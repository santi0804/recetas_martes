import Login from "../pages/auth/Login";
import Dashboard from "../pages/Dashboard";
import Vegetarianas from '../pages/recetas/Vegetarianas'
import NoVegetarianas from '../pages/recetas/NoVegetarianas'
import Register from "../pages/auth/Register";
import CrearRecetaVegetariana from "../pages/recetas/vegetarianas/CrearRecetaVegetariana";
import EditarRecetaVegetariana from "../pages/recetas/vegetarianas/EditarRecetaVegetariana";


export let enrutadorApp = [

    {
        element: <Login />,
        path: "/login",
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/",    // Solo se coloca [/] cuandno son rutas unicas si son rutas hijas no se pone.
        element: <Dashboard />,
        children: [      // componentes hijas.
            {
                path: 'vegetarianas',
                element: <Vegetarianas />
            },
            {
                path: 'no-vegetarianas',
                element: <NoVegetarianas />
            },
            {
                path: 'crear-receta-vegetariana',
                element: <CrearRecetaVegetariana />
            },
            {
                path: 'editar-receta-vegetariana/:id', // Le asigno una nota de que voy a recibir un [/:id] importante los 2 puntos
                element: <EditarRecetaVegetariana />
            },

        ]
    },
]