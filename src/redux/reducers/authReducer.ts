interface AuthState {
  token: string | null;
  error: string | null;
}

interface Action {
  type: string;
  payload?: any;
}

const initialState: AuthState = {
  token: null,
  error: null,
};

export const authReducer = (state = initialState, action: Action): AuthState => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return { ...state, token: action.payload.token, error: null };
    case 'LOGIN_FAILURE':
      return { ...state, error: action.payload };
    case 'REGISTER_SUCCESS':
      return { ...state, error: null };
    case 'REGISTER_FAILURE':
      return { ...state, error: action.payload };
    case 'LOGOUT':
      return { ...state, token: null, error: null };
    case 'persist/REHYDRATE':
      return { ...state, token: action.payload?.auth?.token || null };
    default:
      return state;
  }
}