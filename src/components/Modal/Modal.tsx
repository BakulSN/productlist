import { memo } from 'react';
import crossIcon from '../../assets/icons/cross.svg';
import { ModalContent, ModalHeader, Overlay } from './Modal.styles';
import { StyleSheetManager } from 'styled-components';
import { ModalProps } from '../../models/state/product-state.model';

const Modal = ({ title, visible, onClose, children }: ModalProps) => {
  return (
    <StyleSheetManager shouldForwardProp={(props) => props !== 'visible'}>
      <Overlay visible={visible} onClick={onClose}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <ModalHeader>
            <h2>{title}</h2>
            <button onClick={onClose}>
              <img src={crossIcon} alt="Cross Icon" />
            </button>
          </ModalHeader>
          {children}
        </ModalContent>
      </Overlay>
    </StyleSheetManager>
  );
};
export default memo(Modal);
