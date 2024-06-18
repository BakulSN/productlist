import { useState } from 'react';
import { ProductModel } from '../../models/state/product.model';
import Input from '../Input/Input';
import { AddFormButton, StyledForm } from './Form.styles';
import defaultImage from '../../assets/react.svg';

type ProductFormProps = {
  submitForm: (product: Partial<ProductModel>) => void;
};

const ProductForm = ({ submitForm }: ProductFormProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);

  const handleDescription = (e: React.ChangeEvent<HTMLInputElement>) =>
    setDescription(e.target.value);

  const handlePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(+e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title.trim() !== '' && description.trim() !== '') {
      const newProduct = {
        title,
        description,
        price,
        image: defaultImage,
      };
      submitForm(newProduct);
      setTitle('');
      setDescription('');
      setPrice(0);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Input
        label="title"
        placeholder="title"
        type="text"
        value={title}
        onChange={handleTitle}
      />
      <Input
        label="description"
        placeholder="description"
        type="text"
        value={description}
        onChange={handleDescription}
      />
      <Input
        label="price"
        name="price"
        type="text"
        min={0}
        value={price}
        onChange={handlePrice}
        maxLength={12}
      />

      <AddFormButton type="submit">Create</AddFormButton>
    </StyledForm>
  );
};

export default ProductForm;
