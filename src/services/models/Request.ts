import { Id } from "./Id";
import { DataType } from "./DataType";

interface RequestViewModel {
  productId: Id;
  inputs: Record<Id, DataType>;
}

export default RequestViewModel
