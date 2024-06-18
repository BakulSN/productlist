import { ProductModel } from '../../../models/state/product.model';
import ProductCard from '../card/product-card.component';
import { StyledProductList } from './StyledList.styles';

interface ProductListProps {
  products: ProductModel[];
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <StyledProductList>
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
    </StyledProductList>
  );
};

export default ProductList;
