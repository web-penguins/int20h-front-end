import { Id } from "./Id";
import { DataType } from "./DataType";
import { InputViewModel } from "./Input";

interface ProductViewModel {
  productId: Id;
  userId: Id;
  inputFields: DataType;
  output: DataType;
  name: string;
  description: string;
  executedTimes: number;
  inputs: InputViewModel;
}

export default ProductViewModel;
