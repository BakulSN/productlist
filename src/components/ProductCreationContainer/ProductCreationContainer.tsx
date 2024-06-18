import { useState } from 'react';
import CreateButton from '../CreateButton/CreateButton';
import Modal from '../Modal/Modal';
import ProductForm from '../ProductForm/ProductForm';
import { useAddProduct } from '../../hooks/useAddProduct';
import { ProductModel } from '../../models/state/product.model';

const ProductCreationContainer = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const { addProduct } = useAddProduct();

  const handleOpenModal = () => setModalVisible(true);
  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleFormSubmit = (product: Partial<ProductModel>) => {
    addProduct(product);
    handleCloseModal();
  };
  return (
    <>
      <CreateButton onClick={handleOpenModal} />

      <Modal
        title="Create Product"
        visible={isModalVisible}
        onClose={handleCloseModal}
      >
        <ProductForm submitForm={handleFormSubmit} />
      </Modal>
    </>
  );
};

export default ProductCreationContainer;
