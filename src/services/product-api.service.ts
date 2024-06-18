import axios, { AxiosResponse } from 'axios';
import { ProductModel } from '../models/state/product.model';
import { PRODUCTS_URL } from '../constants/api.constants';

export const fetchProductsApi = {
  getProducts: (): Promise<AxiosResponse<ProductModel[]>> => {
    return axios.get<ProductModel[]>(PRODUCTS_URL);
  },

  addProduct: (
    product: Partial<ProductModel>
  ): Promise<AxiosResponse<ProductModel>> => {
    return axios.post(PRODUCTS_URL, product);
  },

  deleteProduct: (id: number) => {
    return axios.delete(`${PRODUCTS_URL}/${id}`);
  },

  editProduct: (
    id: number,
    updatedProduct: Partial<ProductModel>
  ): Promise<AxiosResponse<ProductModel>> => {
    return axios.patch(`${PRODUCTS_URL}/${id}`, updatedProduct);
  },
};
