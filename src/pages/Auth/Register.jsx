import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm'
import './loguin.css'
import { createUser } from '../../store/Auth/thunk';
import { useNavigate } from 'react-router';




export const Register = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {formState,onInputChange,onResetForm} = useForm({
    email:'',
    password:'',
    displayname:''
  });

  const onSubmit= (event)=>{
    event.preventDefault();
    dispatch(createUser(formState));
    onResetForm();
  }

  const loginpage=()=>{
    navigate("/auth/login");
  }


  return (
    <div className='container'>
        <form className="form-label" onSubmit={onSubmit}>
            <h1>Registar usuario</h1>
            <label>Nombre</label>
            <input type='text' placeholder='ingrese su nombre' name='displayname' onChange={onInputChange} value={formState.displayname}/>
            <label>Email</label>
            <input type="email" placeholder="Ingrese su email" name='email' onChange={onInputChange} value={formState.email}/>
            <label>Contraseña</label>
            <input type="password" placeholder="Ingrese su contraseña" name='password' onChange={onInputChange} value={formState.password}/>
            <div className='buton-container'>
                <button type="submit">Registarte</button>
                <button type="button" onClick={loginpage}>Regresar</button>
            </div>        
        </form>
    </div>
  )
}
