import { useContext } from "react"
import { Context } from "../store/appContext"
import { Link } from "react-router-dom"

const Navbar = () => {
    const { store, actions } = useContext(Context)


    return (
        <>
            <nav>
                <Link to="/">
                    Home
                </Link>
                <div className="ml-auto">
                    {!store.token ?
                        <Link to="/login">
                            <button>
                                Log in
                            </button>
                        </Link>
                        :
                        <Link to="/"><button onClick={() => actions.logout()} className="btn btn-primary">
                            Log out
                        </button></Link>
                    }
                </div>

            </nav>
        </>
    )
}

export default Navbar;