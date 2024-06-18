import useProducts from '../../../hooks/products.hook';
import ProductCreationContainer from '../../ProductCreationContainer/ProductCreationContainer';
import ProductList from './product-list.component';

const ProductListContainer = () => {
  const { products, loading, error } = useProducts();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <ProductList products={products} />
      <ProductCreationContainer />
    </>
  );
};
export default ProductListContainer;
