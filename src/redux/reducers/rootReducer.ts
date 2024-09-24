import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { productReducer } from './productReducer';
import { cardReducer } from './cardReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  prod: productReducer,
  car: cardReducer
});

export type RootState = ReturnType<typeof rootReducer>;
