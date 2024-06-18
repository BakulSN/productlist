import { memo, useCallback, useState } from 'react';
import Input from '../Input/Input';
import { AddFormButton, StyledForm } from './Form.styles';
import defaultImage from '../../assets/react.svg';
import { ProductFormProps } from '../../models/state/product-state.model';

const ProductForm = ({ submitForm }: ProductFormProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);

  const handleTitle = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value),
    []
  );

  const handleDescription = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value),
    []
  );

  const handlePrice = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(+e.target.value);
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
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
    },
    [title, description, price, submitForm]
  );

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

export default memo(ProductForm);
