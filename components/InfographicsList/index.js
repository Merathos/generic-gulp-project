import { useState, useEffect } from 'react';
import {
  ListFigure,
  ClockFigure,
  SatelliteFigure,
  UsersFigure,
  IterationsFigure,
  UploadFigure,
} from 'components';
import * as S from './styles';

const InfographicsList = ({ data, activeItemIndex, onHover }) => {
  const [currentAnimation, changeAnimation] = useState('');

  const infographicsMap = {
    'centers-quantity': <ListFigure />,
    accessibility: <ClockFigure />,
    subscribers: <UsersFigure />,
    'calls-quantity': <SatelliteFigure />,
    'iterations-quantity': <IterationsFigure />,
    'changes-quantity': <UploadFigure />,
  };

  useEffect(() => {
    activeItemIndex !== null
      ? changeAnimation(data[activeItemIndex].name)
      : changeAnimation('');
  }, [activeItemIndex]);

  return (
    <S.Container>
      <S.List>
        {data.map((item, index) => (
          <S.ListItem
            key={index}
            onMouseEnter={() => {
              onHover(true, index);
            }}
            onMouseLeave={() => {
              onHover(false, index);
            }}
            isActive={index === activeItemIndex}
          >
            <S.ItemValue>{item.value}</S.ItemValue>
            <S.ItemTitle>{item.title}</S.ItemTitle>
          </S.ListItem>
        ))}
      </S.List>
      <S.GraphBlock>{infographicsMap[currentAnimation]}</S.GraphBlock>
    </S.Container>
  );
};

export default InfographicsList;
