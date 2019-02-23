import { DataType } from "./DataType";

interface Input {
  inputType: DataType;
  name: string;
  description: string;
}

export type InputViewModel = Array<Input>;

export default Input;
