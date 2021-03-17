import Modal from 'react-modal';
import { CustomScrollbars } from 'components';
import { useState, Children, cloneElement } from 'react';
import { SuccessModal, ErrorModal } from 'containers';
import form from 'mock/forms';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(32, 31, 42, 0.3)',
    zIndex: 5,
  },
};

Modal.setAppElement('#__next');

const FormModal = ({ modalIsOpen, closeModal, children, successData }) => {
  const [successModalIsShown, setSuccessIsShown] = useState(false);
  const [errorModalIsShown, setErrorIsShown] = useState(false);

  function toggleSuccess() {
    setSuccessIsShown((prev) => !prev);
  }

  function toggleError() {
    setErrorIsShown((prev) => !prev);
  }

  const childrenWithProps = Children.map(children, (child) =>
    cloneElement(child, {
      showSuccess: toggleSuccess,
      showError: toggleError,
    })
  );

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        className="formModal"
      >
        <CustomScrollbars onModal>{childrenWithProps}</CustomScrollbars>
      </Modal>
      <SuccessModal
        data={successData}
        isShown={successModalIsShown}
        close={toggleSuccess}
      />
      <ErrorModal
        data={form.error}
        isShown={errorModalIsShown}
        close={toggleError}
      />
    </>
  );
};

export default FormModal;
