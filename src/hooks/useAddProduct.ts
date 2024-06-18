import { useDispatch } from 'react-redux';
import { fetchProductsApi } from '../services/product-api.service';
import { useState } from 'react';
import { ProductModel } from '../models/state/product.model';
import { addProductAction } from '../store/product/product.slice';

export const useAddProduct = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();

  async function addProduct(product: Partial<ProductModel>) {
    setLoading(true);

    try {
      const response = await fetchProductsApi.addProduct(product);

      dispatch(addProductAction(response.data));
    } catch (e) {
      setError(`Something went wrong! Error: ${e}`);
    } finally {
      setLoading(false);
    }
  }

  return { addProduct, loading, error };
};
