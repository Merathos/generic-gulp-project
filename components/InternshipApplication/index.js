import { useState } from 'react';
import * as S from './styles';
import { FormModal } from '../../containers';
import { JobForm } from '../index';

const InternshipApplication = ({ data }) => {
  const { text, title, button } = data;
  const [isModalOpened, setModalOpen] = useState(false);

  const handleSendRequestClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

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
        <S.StyledButton accent="accent" onClick={handleSendRequestClick}>
          {button}
        </S.StyledButton>
      </S.Wrapper>
      {isModalOpened && (
        <FormModal modalIsOpen={isModalOpened} closeModal={closeModal}>
          <JobForm closeModal={closeModal} showSuccess={() => {}} />
        </FormModal>
      )}
    </S.Section>
  );
};

export default InternshipApplication;
