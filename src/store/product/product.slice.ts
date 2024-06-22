import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductStateModel } from '../../models/state/product-state.model';
import { ProductModel } from '../../models/state/product.model';

const initialState: ProductStateModel = {
  products: JSON.parse(localStorage.getItem('products') || '[]'),
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProductsAction: (state, action: PayloadAction<ProductModel[]>) => {
      state.products = action.payload;
      localStorage.setItem('products', JSON.stringify(state.products));
    },
    addProductAction: (state, action: PayloadAction<ProductModel>) => {
      state.products.unshift({ ...action.payload, id: Math.random() });
      localStorage.setItem('products', JSON.stringify(state.products));
    },
    deleteProductAction: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
      localStorage.setItem('products', JSON.stringify(state.products));
    },

    editProductAction: (
      state,
      action: PayloadAction<{
        id: number;
        updatedProduct: Partial<ProductModel>;
      }>
    ) => {
      state.products = state.products.map((product) =>
        product.id === action.payload.id
          ? { ...product, ...action.payload.updatedProduct }
          : product
      );
      localStorage.setItem('products', JSON.stringify(state.products));
    },
  },
});

export const {
  setProductsAction,
  addProductAction,
  deleteProductAction,
  editProductAction,
} = productSlice.actions;
export default productSlice.reducer;
