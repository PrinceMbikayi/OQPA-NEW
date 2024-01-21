import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages";


const routesApp=createBrowserRouter([
    {
        path:'/',
        element: <Home/>
    }
])

export default routesApp;