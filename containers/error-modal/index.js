import Modal from 'react-modal';
import { FormError } from 'components';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(32, 31, 42, 0.3)',
    zIndex: 5,
  },
};

Modal.setAppElement('#__next');

const ErrorModal = ({ data, isShown, close }) => {
  return (
    <Modal
      isOpen={isShown}
      onRequestClose={close}
      style={customStyles}
      className="successModal"
    >
      <FormError data={data} close={close} />
    </Modal>
  );
};

export default ErrorModal;
