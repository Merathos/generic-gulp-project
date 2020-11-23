import Modal from 'react-modal';
import { CustomScrollbars } from 'components';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(32, 31, 42, 0.3)',
  },
};

Modal.setAppElement('#__next');

const FormModal = ({ modalIsOpen, closeModal, children }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      className="formModal"
    >
      <CustomScrollbars onModal>{children}</CustomScrollbars>
    </Modal>
  );
};

export default FormModal;
