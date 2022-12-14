import Modal from 'react-modal';
import { FormConfirmation } from 'components';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(32, 31, 42, 0.3)',
    zIndex: 5,
  },
};

Modal.setAppElement('#__next');

const SuccessModal = ({ data, isShown, close }) => {
  return (
    <Modal
      isOpen={isShown}
      onRequestClose={close}
      style={customStyles}
      className="successModal"
    >
      <FormConfirmation data={data} close={close} />
    </Modal>
  );
};

export default SuccessModal;
