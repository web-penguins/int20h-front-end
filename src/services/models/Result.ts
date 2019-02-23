import { Id } from "./Id";
import { DataType } from "./DataType";

interface Result {
  id: Id;
  productId: Id;
  resultType: DataType;
  resultValue: DataType;
}

export type ResultViewModel = Record<Id, Result>;

export default Result;
