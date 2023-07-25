export interface PropsFilter {
  data: {
    title: string;
    options: Array<{product: string; stock: boolean;}>;
  }[]
};