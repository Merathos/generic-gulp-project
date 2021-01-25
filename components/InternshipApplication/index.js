import { useState } from 'react';
import { FormModal } from 'containers';
import form from 'mock/forms';
import { sanitize } from 'isomorphic-dompurify';
import * as S from './styles';
import { JobForm } from '../index';

const InternshipApplication = ({ data }) => {
  const { text, title, button } = data;
  const [isModalOpened, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(prev => !prev);
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
        {text && (
          <S.Text
            dangerouslySetInnerHTML={{
              __html: sanitize(updatedText),
            }}
          />
        )}
        <S.StyledButton accent="accent" onClick={toggleModal}>
          {button}
        </S.StyledButton>
      </S.Wrapper>
      <FormModal
        modalIsOpen={isModalOpened}
        closeModal={toggleModal}
        successData={form.jobFormV2.confirmation}
      >
        <JobForm closeModal={toggleModal} />
      </FormModal>
    </S.Section>
  );
};

export default InternshipApplication;
