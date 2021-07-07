import injectContext from "./store/appContext"
import { BrowserRouter,Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import Danger from "./views/Danger";
import Funciones from "./views/Funciones";
import Navbar from "./views/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/danger" component={Danger} />
          <Route exact path="/funciones" component={Funciones} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default injectContext(App);
