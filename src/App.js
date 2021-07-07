import injectContext from "./store/appContext"
import { BrowserRouter,Route } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import Danger from "./views/Danger";
import Funciones from "./views/Funciones";
import Navbar from "./views/Navbar";
import Dashboard from "./views/Dashboard";
import PrivateRoute from "./views/PrivateRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
      
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/danger" component={Danger} />
          {/* <Route exact path="/dashboard" component={Dashboard} /> */}
          <PrivateRoute exact path="/dashboard" component={Dashboard}/>
          <Route exact path="/funciones" component={Funciones} />
        
      </BrowserRouter>
    </>
  );
}

export default injectContext(App);
