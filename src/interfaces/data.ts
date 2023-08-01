import { CardProps } from '.';

interface FilesProps {
  type: 'image' | 'video';
  preview: string;
  file: string;
};

interface Data {
  id: string;
  price: number;
  title: string;
  category: string;
  material: string;
  create_at: string;
  description: string;
  card: Array<CardProps>;
  gender: Array<string>;
  color: Array<string>;
  file_banner: string;
  files: Array<FilesProps>;
  comments: Array<object>;
  sales: Array<{ quantity: number, date: Date }>;
};
export interface ProductObject {
  id: string;
  name: string;
  image: string;
  price: string;
  description: string;
  defaultPriceId: string;
};

interface DataProps {
  filter: {
    title: string;
    options: {
      product: string;
      stock: boolean;
    }[];
  }[];
};

export type {
  Data,
  DataProps
};