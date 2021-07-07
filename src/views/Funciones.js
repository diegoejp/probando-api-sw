import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";


const Funciones = ()=>{
    const store = useContext(Context);
    const history = useHistory();

    if (store.token && store.token !== "" && store.token !== undefined) history.push("/");
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>Funciones</h1>
                        <div>
                            {
                                store.token!==null ?
                            <ul className="list-group">
                                <li className="list-group-item">Lorem, ipsum dolor.</li>
                                <li className="list-group-item">Lorem, ipsum dolor.</li>
                                <li className="list-group-item">Lorem, ipsum dolor.</li>
                                <li className="list-group-item">Lorem, ipsum dolor.</li>
                            </ul>
                            :
                            <div>
                                <p>Debe iniciar sesión</p>
                            </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Funciones;