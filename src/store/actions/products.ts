import { InputViewModel } from '../../services/models/Input';
import { OutputViewModel } from '../../services/models/Output';
import ProductViewModel from '../../services/models/Product';
import RequestViewModel from '../../services/models/Request';
import { ResultViewModel } from '../../services/models/Result';
import { ProductsActionType } from '../constants/products';

export interface GetProductsAction {
  type: ProductsActionType.GET_PRODUCTS;
  payload: { request: string };
}

export interface SaveGotProductsAction {
  type: ProductsActionType.SAVE_GOT_PRODUCTS;
  payload: { products: ProductViewModel[] };
}

export interface CreateProductAction {
  type: ProductsActionType.CREATE_PRODUCT;
  payload: {
    name: string;
    description: string;
    inputs: InputViewModel;
    outputs: OutputViewModel;
    files: File[];
  };
}

export interface SaveCreatedProductAction {
  type: ProductsActionType.SAVE_CREATED_PRODUCT;
  payload: {
    product: ProductViewModel;
  };
}

export interface ExecuteProductAction {
  type: ProductsActionType.EXECUTE_PRODUCT;
  payload: { executeRequest: RequestViewModel };
}

export interface SaveExecutedProductResultAction {
  type: ProductsActionType.SAVE_EXECUTED_PRODUCT_RESULT;
  payload: { executionResult: ResultViewModel };
}

export type ProductsAction =
  | GetProductsAction
  | SaveGotProductsAction
  | CreateProductAction
  | SaveCreatedProductAction
  | ExecuteProductAction
  | SaveExecutedProductResultAction;

export const getProducts = (request: string): GetProductsAction => ({
  type: ProductsActionType.GET_PRODUCTS,
  payload: { request },
});

export const saveGotProducts = (
  products: ProductViewModel[]
): SaveGotProductsAction => ({
  type: ProductsActionType.SAVE_GOT_PRODUCTS,
  payload: { products },
});

export const createProduct = (
  name: string,
  description: string,
  inputs: InputViewModel,
  outputs: OutputViewModel,
  files: File[]
): CreateProductAction => ({
  type: ProductsActionType.CREATE_PRODUCT,
  payload: { name, description, inputs, outputs, files },
});

export const saveCreatedProduct = (
  product: ProductViewModel
): SaveCreatedProductAction => ({
  type: ProductsActionType.SAVE_CREATED_PRODUCT,
  payload: { product },
});

export const executeProduct = (
  executeRequest: RequestViewModel
): ExecuteProductAction => ({
  type: ProductsActionType.EXECUTE_PRODUCT,
  payload: { executeRequest },
});

export const saveExecutedProductResult = (
  executionResult: ResultViewModel
): SaveExecutedProductResultAction => ({
  type: ProductsActionType.SAVE_EXECUTED_PRODUCT_RESULT,
  payload: { executionResult },
});
