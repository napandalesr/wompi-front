interface cartState {
  products: product[]
}

interface product {
  idProduct: number;
  count: number;
}

interface Action {
  type: string;
  payload?: any;
}

const initialState: cartState = {
  products: []
};

export const cardReducer = (state = initialState, action: Action): cartState => {
  switch(action.type) {
    case 'ADD_TO_CARD':
      const newStateaADD = state.products;
      const prod = newStateaADD.filter(item => item.idProduct === action.payload.idProduct);
      if(prod.length > 0) {
        newStateaADD.forEach(item => {
          if(item.idProduct === action.payload.idProduct) {
            item.count = action.payload.count;
          }
        });
        return  { ...state, products: newStateaADD};
      }
      return { ...state, products: [ ...state.products, action.payload]};
    case 'DELETE_TO_CARD':
      return { ...state, products: state.products.filter(item => item.idProduct !== action.payload)};
    case 'UPDATE_TO_CARD':
      const newState = state.products;
      newState.forEach(item => {
        if(item.idProduct === action.payload.idProduct) {
          item.count = action.payload.count;
        }
      })
      return { ...state, products: newState};
    default:
      return state;
  }
}