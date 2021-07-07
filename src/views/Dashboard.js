import { useContext } from "react"
import { Context } from "../store/appContext"

const Dashboard = ()=>{

    const {store,actions} = useContext(Context);
    


    function handlePlanets(){
        actions.getPlanets()
    }
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h3>Funciones</h3>
                </div>
                <div className="col-6">
                    <span>Obtener planetas</span>
                    <button onClick={handlePlanets} className="btn btn-primary">planetas</button>
                </div>
                <div className="col-6">
                    {
                    !!store.planets &&
                    store.planets.map((planet,index)=>{
                        return(
                            <>
                            <p>{planet.name}</p>
                            
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
        </>
    )
}

export default Dashboard;