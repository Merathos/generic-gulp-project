import { EventsFilter } from 'forms';
import { Mailing, EventList, EventsTags } from 'components';
import { NewsModal, SuccessModal } from 'containers';
import { useState } from 'react';
import * as S from './styles';

const Events = ({ data, eventCategories, events, pageSlug }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [successIsShown, setSuccessIsShown] = useState(false);

  return (
    <S.Main>
      <S.Container>
        <S.Grid>
          <S.Title>{data.mainTitle}</S.Title>
          <S.Aside>
            <EventsFilter
              data={data}
              eventCategories={eventCategories}
              pageSlug={pageSlug}
              resetButtonText={data.resetButtonText}
            />
            <Mailing data={data.mailing} onClick={() => setIsOpen(true)} />
          </S.Aside>
          <S.ContentWrapper>
            <EventsTags eventCategories={eventCategories} pageSlug={pageSlug} />
            <EventList cards={data.cards.active} />
            <S.CompletedTitle>{data.completedTitle}</S.CompletedTitle>
            <EventList cards={data.cards.completed} completed />
          </S.ContentWrapper>
        </S.Grid>
      </S.Container>
      <NewsModal
        data={data.newsModal}
        modalIsOpen={modalIsOpen}
        closeModal={() => setIsOpen(false)}
        showSuccess={() => setSuccessIsShown(true)}
      />
      <SuccessModal
        data={data.newsModal.confirmation}
        successIsShown={successIsShown}
        closeSuccess={() => setSuccessIsShown(false)}
      />
    </S.Main>
  );
};

export default Events;
