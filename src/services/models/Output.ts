export enum OutputType {
  STRING = 'string',
  PHOTO = 'photo',
}

export interface Output {
  type: OutputType;
}

export type OutputViewModel = Output[];
