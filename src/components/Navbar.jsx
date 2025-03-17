import { useDispatch, useSelector } from "react-redux"
import './Navbar.css'
import { LogoutUser } from "../store/Auth/thunk";

export const Navbar = () => {

  const {displayname} = useSelector(state=>state.auth);
  const dispatch = useDispatch();

  const cerrarSesion= ()=>{
    dispatch(LogoutUser());
  }

  return (
    <div className="container-navbar">
        <div className="Nombre-navbar">
            <h1>{displayname}</h1>
        </div>
        <div className="butons-container">
            <button className="btn-salir" onClick={cerrarSesion}>Salir</button>
        </div>
    </div>
  )
}
