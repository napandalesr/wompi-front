export type ProductType = {
  id: number,
  name: string,
  count: number,
  price: number,
  oldPrice: number,
  shipping: string,
  status: string,
  description: string;
  images: string;
}

interface ProductState {
  productSelected: ProductType;
  productRelactions: ProductType[];
  error: string | null;
}

interface Action {
  type: string;
  payload?: any;
}

const initialState: ProductState = {
  productRelactions: [],
  productSelected: {
    id: 1,
    count: 0,
    description: '',
    images: '',
    name: '',
    oldPrice: 0,
    price: 0,
    shipping: '',
    status: ''
  },
  error: null
};

export const productReducer = (state = initialState, action: Action): ProductState => {
  switch(action.type) {
    case 'PRODUCT_ID':
      return { ...state, productSelected: action.payload.productSelected, error: null };
    default:
      return state;
  }
}