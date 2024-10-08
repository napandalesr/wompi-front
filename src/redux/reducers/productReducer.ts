export type ProductType = {
  id: number,
  name: string,
  count: number,
  price: number,
  oldPrice: number,
  shipping: string,
  status: string,
  description: string;
  images: string[];
}

interface ProductState {
  productSelected: ProductType | null;
  showProduct: number;
  productRelactions: ProductType[];
  error: string | null;
}

interface Action {
  type: string;
  payload?: any;
}

const initialState: ProductState = {
  productRelactions: [],
  productSelected: null,
  showProduct: 1,
  error: null
};

export const productReducer = (state = initialState, action: Action): ProductState => {
  switch(action.type) {
    case 'PRODUCT_ID':
      return { ...state, productSelected: action.payload, error: null };
    case 'PRODUCTS':
      return { ...state, productRelactions: action.payload, error: null };
    case 'SHOW_PRODUCT':
      return { ...state, showProduct: action.payload, error: null };
    default:
      return state;
  }
}