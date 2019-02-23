import { DataType } from './DataType';
import { Id } from './Id';

interface RequestViewModel {
  productId: Id;
  inputs: Record<Id, DataType>;
}

export default RequestViewModel;
