import { useState } from 'react';
import { FormModal, SuccessModal } from 'containers';
import mock from 'mock/index';
import * as S from './styles';
import { JobForm } from '../index';

const InternshipApplication = ({ data }) => {
  const { text, title, button } = data;
  const [isModalOpened, setModalOpen] = useState(false);
  const [successModalIsShown, setSuccessIsShown] = useState(false);

  const toggleModal = () => {
    setModalOpen(prev => !prev);
  };

  function toggleSuccess() {
    setSuccessIsShown(prev => !prev);
  }

  const emailRegExp = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi;
  let updatedText;
  if (text) {
    updatedText = text.replace(
      emailRegExp,
      email => `<a href="mailto:${email}">${email}</a>`
    );
  }

  return (
    <S.Section>
      <S.Wrapper>
        <S.H2>{title}</S.H2>
        {text && <S.Text dangerouslySetInnerHTML={{ __html: updatedText }} />}
        <S.StyledButton accent="accent" onClick={toggleModal}>
          {button}
        </S.StyledButton>
      </S.Wrapper>
      <FormModal modalIsOpen={isModalOpened} closeModal={toggleModal}>
        <JobForm closeModal={toggleModal} showSuccess={toggleSuccess} />
      </FormModal>
      <SuccessModal
        data={mock.jobFormV2.confirmation}
        successIsShown={successModalIsShown}
        closeSuccess={toggleSuccess}
      />
    </S.Section>
  );
};

export default InternshipApplication;
