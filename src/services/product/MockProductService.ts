import { InputViewModel } from '../models/Input';
import ProductViewModel from '../models/Product';
import RequestViewModel from '../models/Request';
import { ResultViewModel } from '../models/Result';
import AbstractProductService from './AbstractProductService';

class MockProductService implements AbstractProductService {
  public async getProducts(request: string): Promise<ProductViewModel[]> {
    return [
      {
        productId: 1,
        userId: 1,
        inputFields: 'input',
        output: 'output',
        name: 'neural network #1',
        description: 'description of the neural network 1',
        executedTimes: 124,
        inputs: [
          {
            inputType: 'string',
            name: 'input',
            description: 'description',
          },
        ],
      },
    ];
  }

  public async createProduct(
    name: string,
    description: string,
    inputs: InputViewModel
  ): Promise<ProductViewModel> {
    return {
      productId: Math.random(),
      userId: 1,
      inputFields: 'input',
      output: 'output',
      name,
      description,
      executedTimes: 0,
      inputs,
    };
  }

  public async execute(
    executeRequest: RequestViewModel
  ): Promise<ResultViewModel> {
    return {
      1: {
        id: 1,
        productId: 1,
        resultType: 'string',
        resultValue: 'blablabla',
      },
    };
  }
}

export default MockProductService;