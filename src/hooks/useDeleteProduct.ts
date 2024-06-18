import { useDispatch } from 'react-redux';
import { fetchProductsApi } from '../services/product-api.service';
import { deleteProductAction } from '../store/product/product.slice';
import { useState } from 'react';

const useDeleteProduct = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();

  async function deleteProduct(id: number) {
    setLoading(true);

    try {
      await fetchProductsApi.deleteProduct(id);
      dispatch(deleteProductAction(id));
    } catch (e) {
      setError(`Something went wrong! Error: ${e}`);
    } finally {
      setLoading(false);
    }
  }

  return { deleteProduct, loading, error };
};

export default useDeleteProduct;
