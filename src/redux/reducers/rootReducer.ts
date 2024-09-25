import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { productReducer } from './productReducer';
import { cardReducer } from './cardReducer';
import { spinnerReducer } from './spinnerReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  prod: productReducer,
  car: cardReducer,
  load: spinnerReducer
});

export type RootState = ReturnType<typeof rootReducer>;
