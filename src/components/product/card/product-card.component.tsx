import { memo, useState } from 'react';
import { ProductModel } from '../../../models/state/product.model';
import {
  ContainerCard,
  ImageWrapperCard,
  ImageCard,
  ContentCard,
  PriceCard,
  EditContainer,
  ButtonContainer,
} from './Card.styles';
import useDeleteProduct from '../../../hooks/useDeleteProduct';
import Description from '../../Description/Description';
import useEditProduct from '../../../hooks/useEditProduct';
import Input from '../../Input/Input';

type ProductCardProps = ProductModel;

const ProductCard = ({
  id,
  title,
  image,
  price,
  description,
}: ProductCardProps) => {
  const { deleteProduct, loading, error } = useDeleteProduct();
  const { editProduct } = useEditProduct();
  const [isEditing, setIsEditing] = useState(false);
  const [updatedProduct, setUpdatedProduct] = useState({
    id,
    title,
    image,
    price,
    description,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdatedProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleEdit = () => {
    setUpdatedProduct({ id, title, image, price, description });
    setIsEditing(true);
  };

  const handleSave = () => {
    const savedProduct = {
      id,
      title: updatedProduct.title || title,
      image,
      price: updatedProduct.price || price,
      description: updatedProduct.description || description,
    };

    editProduct(id, savedProduct);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setUpdatedProduct({ id, title, image, price, description });
  };

  const handleDelete = () => deleteProduct(id);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <ContainerCard>
      <ImageWrapperCard>
        <ImageCard src={image} alt={title} />
      </ImageWrapperCard>

      {isEditing ? (
        <>
          <EditContainer>
            <Input
              label="title"
              name="title"
              placeholder="title"
              value={updatedProduct.title}
              onChange={handleChange}
            />
            <Input
              label="description"
              name="description"
              placeholder="description"
              value={updatedProduct.description}
              onChange={handleChange}
            />
            <Input
              label="price"
              name="price"
              min={0}
              maxLength={12}
              value={updatedProduct.price}
              onChange={handleChange}
            />
          </EditContainer>
          <ButtonContainer>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </ButtonContainer>
        </>
      ) : (
        <>
          <ContentCard>
            <h3>{title}</h3>
            <Description text={description} />
          </ContentCard>
          <PriceCard>{price} $</PriceCard>
          {isEditing ? null : <button onClick={handleEdit}>Edit</button>}
          <button onClick={handleDelete}>X</button>
        </>
      )}
    </ContainerCard>
  );
};

export default memo(ProductCard);
