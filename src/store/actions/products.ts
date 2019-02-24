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

export type ProductsAction =
  | GetProductsAction
  | CreateProductAction
  | ExecuteProductAction;

export const getProducts = (request: string): GetProductsAction => ({
  type: ProductsActionType.GET_PRODUCTS,
  payload: { request },
});

export const createProduct = (
  name: string,
  description: string,
  inputs: InputViewModel,
  outputs: OutputViewModel
): CreateProductAction => ({
  type: ProductsActionType.CREATE_PRODUCT,
  payload: { name, description, inputs, outputs },
});

export const executeProduct = (
  executeRequest: RequestViewModel
): ExecuteProductAction => ({
  type: ProductsActionType.EXECUTE_PRODUCT,
  payload: { executeRequest },
});
