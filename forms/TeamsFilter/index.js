import { useState } from 'react';
import { FilterButton, Checkbox } from 'elements';
import { useDispatch, useSelector } from 'react-redux';
import * as S from './styles';

const TeamsFilter = props => {
  const {
    data: { title, list },
    handleChange
  } = props;
  const filterArray = useSelector(state => state.filter);

  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.List>
        {list.map((el, i) => (
          <S.Item key={i}>
            <input
              type="checkbox"
              name={el}
              id={el}
              onChange={() => handleChange(el)}
              disabled={filterArray.indexOf(el) !== -1}
            />
            <S.Label htmlFor={el}>{el}</S.Label>
          </S.Item>
        ))}
      </S.List>
    </S.Wrapper>
  );
};

export default TeamsFilter;
