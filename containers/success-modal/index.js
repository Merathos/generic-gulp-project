import Modal from 'react-modal';
import { Confirmation } from 'components';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(32, 31, 42, 0.3)',
    zIndex: 5,
  },
};

Modal.setAppElement('#__next');

const SuccessModal = ({ data, successIsShown, closeSuccess }) => {
  return (
    <Modal
      isOpen={successIsShown}
      onRequestClose={closeSuccess}
      style={customStyles}
      className="successModal"
    >
      <Confirmation data={data} closeSuccess={closeSuccess} />
    </Modal>
  );
};

export default SuccessModal;
