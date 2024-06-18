import { memo, useCallback, useState } from 'react';
import CreateButton from '../CreateButton/CreateButton';
import Modal from '../Modal/Modal';
import ProductForm from '../ProductForm/ProductForm';
import { useAddProduct } from '../../hooks/useAddProduct';
import { ProductModel } from '../../models/state/product.model';

const ProductCreationContainer = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const { addProduct } = useAddProduct();

  const handleOpenModal = useCallback(() => setModalVisible(true), []);

  const handleCloseModal = useCallback(() => setModalVisible(false), []);

  const handleFormSubmit = useCallback(
    (product: Partial<ProductModel>) => {
      addProduct(product);
      handleCloseModal();
    },
    [addProduct, handleCloseModal]
  );

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

export default memo(ProductCreationContainer);
