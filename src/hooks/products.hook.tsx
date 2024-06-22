import { useEffect, useState } from 'react';
import { fetchProductsApi } from '../services/product-api.service';
import { useDispatch, useSelector } from 'react-redux';
import { setProductsAction } from '../store/product/product.slice';
import { selectProducts } from '../store/product/productSelectors';

const useProducts = () => {
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);

      try {
        const response = await fetchProductsApi.getProducts();
        dispatch(setProductsAction(response.data));
      } catch (e) {
        setError(`Something went wrong! Error: ${e}`);
      } finally {
        setLoading(false);
      }
    }
    const localProducts = localStorage.getItem('products');
    if (localProducts) {
      dispatch(setProductsAction(JSON.parse(localProducts)));
      setLoading(false);
    } else {
      fetchProducts();
    }
  }, [dispatch]);

  return { products, loading, error };
};

export default useProducts;
