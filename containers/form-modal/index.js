import Modal from 'react-modal';

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
      {children}
    </Modal>
  );
};

export default FormModal;
