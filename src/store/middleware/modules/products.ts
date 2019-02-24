import { MiddlewareAPI } from 'redux';
import ProductsService from '../../../services/product/ProductService';
import {
  CreateProductAction,
  ExecuteProductAction,
  GetProductsAction,
  saveCreatedProduct,
  saveExecutedProductResult,
  saveGotProducts,
} from '../../actions/products';
import { ProductsActionType } from '../../constants/products';

const service = new ProductsService();

export const get = (action: GetProductsAction, store: MiddlewareAPI) => {
  const { request } = action.payload;
  service
    .getProducts(request)
    .then(products => store.dispatch(saveGotProducts(products)));
};

export const create = (action: CreateProductAction, store: MiddlewareAPI) => {
  const { name, description, inputs, outputs } = action.payload;
  service
    .createProduct(name, description, inputs, outputs)
    .then(product => store.dispatch(saveCreatedProduct(product)));
};
export const execute = (action: ExecuteProductAction, store: MiddlewareAPI) => {
  const { executeRequest } = action.payload;
  service
    .execute(executeRequest)
    .then(executionResult =>
      store.dispatch(saveExecutedProductResult(executionResult))
    );
};

export const user = {
  [ProductsActionType.GET_PRODUCTS]: get,
  [ProductsActionType.CREATE_PRODUCT]: create,
  [ProductsActionType.EXECUTE_PRODUCT]: execute,
};
