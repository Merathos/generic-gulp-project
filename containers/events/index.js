import { EventsFilter } from 'forms';
import { FilterButton } from 'elements';
import { Mailing, EventList, SubForm } from 'components';
import { FormModal, SuccessModal } from 'containers';
import { useState } from 'react';
import * as S from './styles';

const Events = ({ data }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [successIsShown, setSuccessIsShown] = useState(false);

  function toggleModal() {
    setIsOpen(prev => !prev);
  }

  function toggleSuccess() {
    setSuccessIsShown(prev => !prev);
  }

  return (
    <S.Main>
      <S.Container>
        <S.Grid>
          <S.Title>{data.mainTitle}</S.Title>
          <S.Aside>
            <EventsFilter data={data} />
            <Mailing data={data.mailing} onClick={toggleModal} />
          </S.Aside>
          <S.ContentWrapper>
            <S.Tags>
              {data.tags.map((el, i) => (
                <S.Tag key={i}>
                  <FilterButton name={el} handleChange={() => {}} />
                </S.Tag>
              ))}
            </S.Tags>
            <EventList cards={data.cards.active} />
            <S.CompletedTitle>{data.completedTitle}</S.CompletedTitle>
            <EventList cards={data.cards.completed} completed />
          </S.ContentWrapper>
        </S.Grid>
      </S.Container>
      <FormModal modalIsOpen={modalIsOpen} closeModal={toggleModal}>
        <SubForm
          data={data.newsModal}
          closeModal={toggleModal}
          showSuccess={toggleSuccess}
        />
      </FormModal>
      <SuccessModal
        data={data.newsModal.confirmation}
        successIsShown={successIsShown}
        closeSuccess={toggleSuccess}
      />
    </S.Main>
  );
};

export default Events;
