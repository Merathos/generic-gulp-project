import { EventList, EventsTags, Mailing, SubForm } from 'components';
import { FormModal, SuccessModal } from 'containers';
import { EventsFilter } from 'forms';
import { useState } from 'react';
import * as S from './styles';

const Events = ({ data, eventCategories, events, pageSlug }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [successIsShown, setSuccessIsShown] = useState(false);

  function toggleModal() {
    setIsOpen(prev => !prev);
  }

  function toggleSuccess() {
    setSuccessIsShown(prev => !prev);
  }

  // Filter upcoming events
  const eventsUpcoming = events?.filter(
    event => Date.parse(event.ends_at) - Date.parse(new Date()) > 0
  );

  // Filter ended events
  const eventsEnded = events?.filter(
    event => Date.parse(event.ends_at) - Date.parse(new Date()) < 0
  );

  return (
    <S.Main>
      <S.Container>
        <S.Grid>
          <S.Title>{data.mainTitle}</S.Title>
          <S.Aside>
            {eventCategories && (
              <EventsFilter
                data={data}
                eventCategories={eventCategories}
                pageSlug={pageSlug}
                resetButtonText={data.resetButtonText}
              />
            )}
            <Mailing data={data.mailing} onClick={() => setIsOpen(true)} />
          </S.Aside>
          <S.ContentWrapper>
            {eventCategories && (
              <EventsTags
                eventCategories={eventCategories}
                pageSlug={pageSlug}
              />
            )}
            {eventsUpcoming?.length > 0 && (
              <EventList events={eventsUpcoming} />
            )}
            <S.CompletedTitle>{data.completedTitle}</S.CompletedTitle>
            {eventsEnded?.length > 0 && (
              <EventList events={eventsEnded} completed />
            )}
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
