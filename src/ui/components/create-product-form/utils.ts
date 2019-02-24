export const cloneArray = <T extends any>(arr: T): T =>
  arr.map((a: any) => ({ ...a }));
