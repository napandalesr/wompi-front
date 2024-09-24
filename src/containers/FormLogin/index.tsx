import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers/rootReducer';
import { login, register } from '../../redux/actions/authActions';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

const FormLogin = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [form, setForm] = useState<'login' | 'register'>('login');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> = useDispatch();
  const error = useSelector((state: RootState) => state.auth.error);

  const handleSubmitLogin = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  const handleSubmitRegister = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(register({ name, email, password, confirmPassword }));
  };

  return <section className='containerLogin__form'>
    <span className='containerLogin__form__button'>
      <button className={`${form === 'login' && 'containerLogin__form__button--active'}`} onClick={() => setForm('login')}>Ingresa</button>
      <button className={`${form === 'register' && 'containerLogin__form__button--active'}`} onClick={() => setForm('register')}>Registro</button>
    </span>
    {
      form === 'login' ? 
      <form onSubmit={handleSubmitLogin}>
        <h4>Ingresa con tus datos</h4>
      {error && <p className='message-error' style={{ color: 'red' }}>{error}</p>}
        <div>
          <input
            type="email"
            placeholder='Correo'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder='Contraseña'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Ingresar</button>
    </form>
    :
    <form onSubmit={handleSubmitRegister}>
    {error && <p className='message-error' style={{ color: 'red' }}>{error}</p>}
      <div>
        <input
          type="text"
          placeholder='Nombre'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <input
          type="email"
          placeholder='Correo'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder='Contraseña'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder='Confirmar contraseña'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <button type="submit">Registrame</button>
    </form>
    }
    

    
  </section>;
}

export default FormLogin;