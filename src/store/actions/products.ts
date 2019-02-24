import { InputViewModel } from '../../services/models/Input';
import { OutputViewModel } from '../../services/models/Output';
import RequestViewModel from '../../services/models/Request';
import { ProductsActionType } from '../constants/products';

export interface GetProductsAction {
  type: ProductsActionType.GET_PRODUCTS;
  payload: { request: string };
}

export interface CreateProductAction {
  type: ProductsActionType.CREATE_PRODUCT;
  payload: {
    name: string;
    description: string;
    inputs: InputViewModel;
    outputs: OutputViewModel;
  };
}

export interface ExecuteProductAction {
  type: ProductsActionType.EXECUTE_PRODUCT;
  payload: { executeRequest: RequestViewModel };
}
