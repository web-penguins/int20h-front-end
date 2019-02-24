import endpoint from '../endpoint';
import { InputViewModel } from '../models/Input';
import { OutputViewModel } from '../models/Output';
import ProductViewModel from '../models/Product';
import RequestViewModel from '../models/Request';
import { ResultViewModel } from '../models/Result';
import { UserViewModel } from '../models/User';
import userSingleton from '../user/userSingleton';
import AbstractProductService from './AbstractProductService';

class ProductService implements AbstractProductService {
  private user: UserViewModel | undefined;
  private isAuthenticated: boolean;

  constructor() {
    this.isAuthenticated = userSingleton.isAuthenticated();
    let u;
    userSingleton.getInfo().then(user => {
      u = user;
    });
    this.user = u;
  }

  public async getProducts(request: string): Promise<ProductViewModel[]> {
    return this.isAuthenticated
      ? fetch(endpoint + '/product/list', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Token: this.user!.token,
          },
          body: JSON.stringify({
            request,
          }),
        }).then(res => res.json())
      : new Error('Not authenticated');
  }

  public async createProduct(
    name: string,
    description: string,
    inputs: InputViewModel,
    outputs: OutputViewModel,
    files: File[]
  ): Promise<ProductViewModel> {
    const formData = new FormData();
    files.forEach(f => formData.append('files[]', f));
    return this.isAuthenticated
      ? fetch(endpoint + '/product/create', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
            Token: this.user!.token,
            Metadata: JSON.stringify({
              name,
              description,
              inputs,
              outputs,
            }),
          },
          body: formData,
        }).then(res => res.json())
      : new Error('Not authenticated');
  }

  public async execute(
    executeRequest: RequestViewModel
  ): Promise<ResultViewModel> {
    return this.isAuthenticated
      ? fetch(endpoint + '/product/execute', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Token: this.user!.token,
          },
          body: JSON.stringify({
            executeRequest,
          }),
        }).then(res => res.json())
      : new Error('Not authenticated');
  }
}

export default ProductService;
