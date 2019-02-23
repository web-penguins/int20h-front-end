import { DataType } from './DataType';
import { Id } from './Id';

interface Result {
  id: Id;
  productId: Id;
  resultType: DataType;
  resultValue: DataType;
}

export type ResultViewModel = Record<Id, Result>;

export default Result;
