import { EventList, EventsTags, Mailing, EventForm } from 'components';
import { FormModal } from 'containers';
import { EventsFilter } from 'forms';
import { useState } from 'react';
import { useRouter } from 'next/router';
import * as S from './styles';

const Events = ({ data, eventCategories, events, pageSlug }) => {
  const router = useRouter();
  const [modalIsOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(prev => !prev);
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
          <S.Title
            bigMarginBottom={
              !router.query.categories && eventsUpcoming?.length > 0
            }
          >
            {data.mainTitle}
          </S.Title>
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
            {eventsUpcoming?.length === 0 && !router.query.categories && (
              <S.Announcement>
                {data.announcement.text}
                <S.StyledIcon name={data.announcement.emodzi} white />
              </S.Announcement>
            )}
            {eventsUpcoming?.length > 0 && (
              <EventList events={eventsUpcoming} />
            )}
            <S.CompletedTitle>{data.completedTitle}</S.CompletedTitle>
            {eventsEnded?.length > 0 && (
              <EventList events={eventsEnded} noMarginBottom />
            )}
          </S.ContentWrapper>
        </S.Grid>
      </S.Container>
      <FormModal
        modalIsOpen={modalIsOpen}
        closeModal={toggleModal}
        successData={data.newsModal.confirmation}
      >
        <EventForm
          data={data.newsModal}
          closeModal={toggleModal}
          eventCategories={eventCategories}
        />
      </FormModal>
    </S.Main>
  );
};

export default Events;
