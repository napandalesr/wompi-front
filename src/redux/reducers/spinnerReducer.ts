interface spinnerState {
  load: boolean;
}

interface Action {
  type: string;
  payload?: any;
}

const initialState: spinnerState = {
  load: false
}

export const spinnerReducer = (state = initialState, action: Action): spinnerState => {
  switch(action.type) {
    case 'LOADING':
      return { load:  action.payload};
    default:
      return state;
  }
}