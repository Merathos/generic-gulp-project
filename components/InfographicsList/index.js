import * as S from './styles';
import { useState } from 'react';
import {
  ListFigure,
  ClockFigure,
  SatelliteFigure,
  UsersFigure,
  IterationsFigure,
  UploadFigure,
} from 'components';

const InfographicsList = ({ data }) => {
  const [currentAnimation, changeAnimation] = useState('');

  const infographicsMap = {
    'centers-quantity': <ListFigure />,
    accessibility: <ClockFigure />,
    subscribers: <UsersFigure />,
    'calls-quantity': <SatelliteFigure />,
    'iterations-quantity': <IterationsFigure />,
    'changes-quantity': <UploadFigure />,
  };

  return (
    <S.Container>
      <S.List>
        {data.map((item, index) => (
          <S.ListItem
            key={index}
            onMouseEnter={() => changeAnimation(item.name)}
            onMouseLeave={() => changeAnimation('')}
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
