export interface Resolver {
  name: string;
  function: (parent: any, input: any, context: any) => any;
}
