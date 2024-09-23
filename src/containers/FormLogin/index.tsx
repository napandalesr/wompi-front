import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers/rootReducer';
import { login } from '../../redux/actions/authActions';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

const FormLogin = () => {
  const [email, setEmail] = useState('');
  const [form, setForm] = useState<'login' | 'register'>('login');
  const [password, setPassword] = useState('');
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> = useDispatch();
  const error = useSelector((state: RootState) => state.auth.error);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email, password);
    
    dispatch(login({ email, password }));
  };

  return <section className='containerLogin__form'>
    <span className='containerLogin__form__button'>
      <button className={`${form === 'login' && 'containerLogin__form__button--active'}`} onClick={() => setForm('login')}>Ingresa</button>
      <button className={`${form === 'register' && 'containerLogin__form__button--active'}`} onClick={() => setForm('register')}>Registro</button>
    </span>
    {
      form === 'login' ? 
      <form onSubmit={handleSubmit}>
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
    <form onSubmit={handleSubmit}>
    {error && <p className='message-error' style={{ color: 'red' }}>{error}</p>}
      <div>
        <input
          type="email"
          placeholder='Nombre'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Login</button>
    </form>
    }
    

    
  </section>;
}

export default FormLogin;