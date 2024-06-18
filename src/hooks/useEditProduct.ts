import { useDispatch } from 'react-redux';
import { fetchProductsApi } from '../services/product-api.service';
import { editProductAction } from '../store/product/product.slice';
import { ProductModel } from '../models/state/product.model';

const useEditProduct = () => {
  const dispatch = useDispatch();

  async function editProduct(
    id: number,
    updatedProduct: Partial<ProductModel>
  ) {
    await fetchProductsApi.editProduct(id, updatedProduct);
    dispatch(editProductAction({ id, updatedProduct }));
  }

  return { editProduct };
};

export default useEditProduct;
