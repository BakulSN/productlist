import { ReactNode } from 'react';
import { ProductModel } from './product.model';

export interface ProductStateModel {
  products: ProductModel[];
}

export interface ProductFormProps {
  submitForm: (product: Partial<ProductModel>) => void;
};

export interface ModalProps {
  title: string;
  visible: boolean;
  onClose: () => void;
  children?: ReactNode;
}

export interface DescriptionProps {
  text: string;
  maxLength?: number;
}