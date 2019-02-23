import { InputViewModel } from '../models/Input';
import ProductViewModel from '../models/Product';
import RequestViewModel from '../models/Request';
import { ResultViewModel } from '../models/Result';

interface AbstractProductService {
  getProducts(request: string): Promise<ProductViewModel>;

  createProduct(
    name: string,
    description: string,
    inputs: InputViewModel
  ): Promise<void>;

  execute(executeRequest: RequestViewModel): Promise<ResultViewModel>;
}

export default AbstractProductService;
