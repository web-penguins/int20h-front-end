import { Id } from './Id';
import { InputViewModel } from './Input';
import { OutputViewModel } from './Output';

interface ProductViewModel {
  productId: Id;
  userId: Id;
  name: string;
  description: string;
  executedTimes: number;
  inputs: InputViewModel;
  outputs: OutputViewModel;
}

export default ProductViewModel;
