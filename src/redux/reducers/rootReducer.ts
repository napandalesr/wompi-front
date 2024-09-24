import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { productReducer } from './productReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  prod: productReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
