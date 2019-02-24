import { InputViewModel } from '../models/Input';
import { OutputType, OutputViewModel } from '../models/Output';
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
        name: 'Numbers optimization',
        description:
          "It's neural network for optimization of recognized numbers",
        executedTimes: 124,
        inputs: [
          {
            inputType: 'photo',
            name: 'Photo of a number',
            description:
              'This photo will be recognised and try to optimize by our model',
          },
        ],
        outputs: [{ type: OutputType.PHOTO }],
      },
      {
        productId: 2,
        userId: 1,
        name: 'Road sign',
        description:
          'Neural network model with classify of which type is this road sign',
        executedTimes: 124,
        inputs: [
          {
            inputType: 'photo',
            name: 'Photo os road sign',
            description:
              'Your road sign which will be classified by our neural network',
          },
        ],
        outputs: [{ type: OutputType.STRING }],
      },
    ];
  }

  public async createProduct(
    name: string,
    description: string,
    inputs: InputViewModel,
    outputs: OutputViewModel
  ): Promise<ProductViewModel> {
    return {
      productId: Math.random(),
      userId: 1,
      name,
      description,
      executedTimes: 0,
      inputs,
      outputs,
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
