import { Link } from "react-router-dom";

const Home = ()=>{
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>Bienvenido</h1>
                    <Link
                    to="/login"><p>Para acceder a las funciones, debe iniciar sesión</p></Link>
                    <p>Click aquí</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home;