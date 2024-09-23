import { createStore, applyMiddleware, compose, Store, AnyAction } from 'redux';
import { ThunkMiddleware, thunk } from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

import { rootReducer, RootState } from './reducers/rootReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store: Store<RootState, AnyAction> = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk as unknown as ThunkMiddleware<RootState, AnyAction>))
);


const persistor = persistStore(store);

export { store, persistor };
