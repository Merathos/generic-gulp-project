import * as S from './styles';
import { EventsFilter } from 'forms';
import { FilterButton } from 'elements';
import { Mailing, EventList } from 'components';
import { NewsModal, SuccessModal } from 'containers';

const Events = ({ data }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [successIsShown, setSuccessIsShown] = React.useState(false);

  function showSuccess() {
    setSuccessIsShown(true);
  }

  function closeSuccess() {
    setSuccessIsShown(false);
  }

  return (
    <S.Main>
      <S.Container>
        <S.Grid>
          <S.Title>{data.mainTitle}</S.Title>
          <S.Aside>
            <EventsFilter data={data} />
            <Mailing data={data.mailing} onClick={openModal} />
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
            <EventList cards={data.cards.completed} completed={true} />
          </S.ContentWrapper>
        </S.Grid>
      </S.Container>
      <NewsModal
        data={data.newsModal}
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        showSuccess={showSuccess}
      />
      <SuccessModal
        data={data.newsModal.confirmation}
        successIsShown={successIsShown}
        closeSuccess={closeSuccess}
      />
    </S.Main>
  );
};

export default Events;
