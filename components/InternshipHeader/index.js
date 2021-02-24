import Router from 'next/router';
import { useState } from 'react';
import mock from 'mock/forms';
import { FormModal } from 'containers';
import * as S from './styles';
import { InternForm } from '../index';

const InternshipHeader = ({
  title,
  text,
  picture,
  buttons,
  mobPicture,
  size,
}) => {
  const [isModalOpened, setModalOpen] = useState(false);

  const handleVacanciesClick = () => {
    Router.push({
      pathname: '/vacancies',
      query: 'internship=true',
    }).then(() => window.scrollTo(0, 0));
  };

  const handleSendRequestClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <S.Grid>
      <S.Wrapper withPicture={!!picture}>
        <S.Title>{title}</S.Title>
        {picture && (
          <S.Block afterTitle>
            <S.Picture
              src={picture}
              srcSet={`${mobPicture} 420w, ${picture}`}
              alt={title}
              width={size?.width}
              height={size?.height}
            />
          </S.Block>
        )}
        <S.Paragraph>{text}</S.Paragraph>
        {buttons && (
          <S.ButtonsWrapper>
            <S.StyledButton accent onClick={handleSendRequestClick}>
              {buttons[0]}
            </S.StyledButton>
            <S.Button onClick={handleVacanciesClick}>{buttons[1]}</S.Button>
          </S.ButtonsWrapper>
        )}
      </S.Wrapper>
      {picture && (
        <S.Block afterTitle={false}>
          <S.Picture
            src={picture}
            alt={title}
            width={size?.width}
            height={size?.height}
          />
        </S.Block>
      )}
      <FormModal
        modalIsOpen={isModalOpened}
        closeModal={closeModal}
        successData={mock.internForm.confirmation}
      >
        <InternForm closeModal={closeModal} />
      </FormModal>
    </S.Grid>
  );
};

export default InternshipHeader;
