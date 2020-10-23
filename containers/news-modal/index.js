import Modal from 'react-modal';
import { SubForm } from 'components';

const customStyles = {
  overlay: {
    backgroundColor       : 'rgba(32, 31, 42, 0.3)'
  }
};

Modal.setAppElement('#__next');

const NewsModal = ({ data, modalIsOpen, closeModal, showSuccess }) => {

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Подписка на новости"
      className="newsModal"
    > 
      <SubForm data={data} closeModal={closeModal} showSuccess={showSuccess} />
    </Modal>
  );
};

export default NewsModal;