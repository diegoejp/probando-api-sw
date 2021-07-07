import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
//import injectContext from "./store/appContext"
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";




function Login() {
    const {  actions } = useContext(Context);
    const [name, setName] = useState("");
    const [password, setPassword] = useState("")
    //const token = sessionStorage.getItem("token"); token en local
    //console.log("This is your token "+ token)
    const history = useHistory();

    /* const opt = {
        method: "POST",
        body: JSON.stringify({
            "name": name,
            "password": password
        }),
        headers: {
            "Content-Type": "application/json"
        }

    } */

    function consultarUsuarios() {
        actions.login(name,password,history)
        
        
        
        
    };

     /* if(store.token && store.token !== "" && store.token !== undefined) history.push("/funciones");  */ 

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>Login</h1>
                                <div>
                                    <input type="text" onChange={(e) => setName(e.target.value)} placeholder="User Name" />
                                    <input type="text" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                                    <Link to="/dashboard"><button className="btn btn-primary" onClick={consultarUsuarios}>Iniciar sesión</button></Link>
                                </div>
                        
                    </div>
                </div>
            </div>


        </>
    );
}

export default Login;
