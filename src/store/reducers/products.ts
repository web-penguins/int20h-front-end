import ProductViewModel from '../../services/models/Product';
import { ResultViewModel } from '../../services/models/Result';
import { ProductsAction } from '../actions/products';
import { ProductsActionType } from '../constants/products';

export interface ProductsState {
  products: ProductViewModel[] | null;
  lastExecutionResult: ResultViewModel | null;
}

const initial = {
  products: null,
  lastExecutionResult: null,
};

export const products = (
  state: ProductsState = initial,
  action: ProductsAction
): ProductsState => {
  switch (action.type) {
    case ProductsActionType.SAVE_GOT_PRODUCTS:
      return { ...state, products: action.payload.products };
    case ProductsActionType.SAVE_CREATED_PRODUCT:
      return {
        ...state,
        products: [...state.products!, action.payload.product],
      };
    case ProductsActionType.SAVE_EXECUTED_PRODUCT_RESULT:
      return {
        ...state,
        lastExecutionResult: action.payload.executionResult,
      };
    default:
      return state;
  }
};
