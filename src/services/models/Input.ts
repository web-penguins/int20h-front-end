import { DataType } from './DataType';

interface Input {
  inputType: DataType;
  name: string;
  description: string;
}

export type InputViewModel = Input[];

export default Input;
