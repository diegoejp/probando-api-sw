import { Route } from "react-router"
//import { Context } from "../store/appContext";
//import { useContext } from "react";
import { Redirect } from "react-router";



/* const PrivateRoute = (props)=>{
    return (<Route exact={props.exact} path={props.path} component={props.component} />
        );
  
} */
let auth = sessionStorage.getItem("done")


const PrivateRoute = ({component:Component,...rest}) => {
    //const { store } = useContext(Context);  
    
    

    /* return (
        (store.done !== null)?
        <Route {...rest}>
            {<Component/>}
        </Route>
        :
            <Route {...rest}>
                {<Redirect to="/" />}
            </Route>
    ); */
    return(
        <Route {...rest}>
            {auth ?<Component/>:<Redirect to="/login" />}
        </Route>
    )
}

//Auntentificacion



export default PrivateRoute;