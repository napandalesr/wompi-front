import React from 'react';
import FormLogin from '../../containers/FormLogin';

import './style.less';
import Spinner from '../../components/Spinner';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers/rootReducer';

const Login = () => {
  const loading = useSelector((state: RootState) => state.load.load);
  return <main className='containerLogin'>
    {
      loading && <Spinner/>
    }
    <FormLogin/>
  </main>;
}

export default Login;