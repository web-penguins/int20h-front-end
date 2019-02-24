import { InputViewModel } from '../models/Input';
import { OutputViewModel } from '../models/Output';
import ProductViewModel from '../models/Product';
import RequestViewModel from '../models/Request';
import { ResultViewModel } from '../models/Result';

interface AbstractProductService {
  getProducts(request: string): Promise<ProductViewModel[]>;

  createProduct(
    name: string,
    description: string,
    inputs: InputViewModel,
    outputs: OutputViewModel,
    files: File[]
  ): Promise<ProductViewModel>;

  execute(executeRequest: RequestViewModel): Promise<ResultViewModel>;
}

export default AbstractProductService;
