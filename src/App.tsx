import { RouterProvider } from "react-router-dom";
import routesApp from "./utils/routes";
import 'intro.js/introjs.css';

const App = () => {
  return (
    <div>
      <RouterProvider router={routesApp}/>
    </div>
  )
}

export default App;
