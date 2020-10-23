import Modal from 'react-modal';
import { SubForm, Confirmation } from 'components';

const customStyles = {
  overlay: {
    backgroundColor       : 'rgba(32, 31, 42, 0.3)'
  },
  content : {
    margin                : '0 auto',
    left                  : '0',
    right                 : '0',
    border                : 'none',
    borderRadius          : '0',
    padding               : '0',
  }
};

Modal.setAppElement('#__next');

const NewsModal = ({ data, modalIsOpen, closeModal }) => {
  const [isSubmitted,setIsSubmitted] = React.useState(false);

  function showConfirm() {
    setIsSubmitted(true);
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Подписка на новости"
      className="newsModal"
    >
      {isSubmitted ? <Confirmation data={data.confirmation} closeModal={closeModal} /> : 
      <SubForm data={data} closeModal={closeModal} showConfirm={showConfirm} />}
    </Modal>
  );
};

export default NewsModal;