import * as S from './styles';
import { EventsFilter } from 'forms';
import { FilterButton } from 'elements';
import { Mailing, EventList } from 'components';

const Events = ({data}) => {
  return (
    <S.Main>
      <S.Container>
        <S.Grid>
          <S.Title>{data.mainTitle}</S.Title>
          <S.Aside>
            <EventsFilter data={data} />
            <Mailing data={data.mailing} />
          </S.Aside>
          <S.ContentWrapper>
            <S.Tags>
              {data.tags.map((el, i) => (
                <S.Tag key={i}>
                  <FilterButton
                    name={el}
                    handleChange={() => {}}
                  />
                </S.Tag>
              ))}
            </S.Tags>
            <EventList cards={data.cards.active} />
            <S.CompletedTitle>{data.completedTitle}</S.CompletedTitle>
            <EventList cards={data.cards.completed} completed={true} />
          </S.ContentWrapper>
        </S.Grid>
      </S.Container>
    </S.Main>
    );
};

export default Events;