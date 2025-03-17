import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm'
import './loguin.css'
import { sigInuser } from '../../store/Auth/thunk';
import { useNavigate } from 'react-router';

export const Loguin = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {user,password,onInputChange,onResetForm} = useForm({
    user:'',
    password:''
  });

  const onSubmit=(event)=>{
    event.preventDefault();
    dispatch(sigInuser(user,password))
  }

  const registerpage=()=>{
    navigate("/auth/register");
  }


  return (
    <div className='container'>
        <form className="form-label" onSubmit={onSubmit}>
            <h1>Inicio de Sesion</h1>
            <label>Email</label>
            <input type="email" placeholder="Ingrese su email" name='user' onChange={onInputChange} value={user}/>
            <label>Contraseña</label>
            <input type="password" placeholder="Ingrese su contraseña" name='password' onChange={onInputChange} value={password}/>
            <div className='buton-container'>
                <button type="submit">Ingresar</button>
                <button type='button' onClick={registerpage}>Registarse</button>
            </div>        
        </form>
    </div>
  )
}
