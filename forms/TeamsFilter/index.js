import { Checkbox } from 'elements';
import { CustomScrollbars } from 'components';
import { useSelector } from 'react-redux';
import * as S from './styles';
import { useState } from 'react';

const TeamsFilter = props => {
  const {
    data: { title, list },
    handleChange,
  } = props;
  const [hidden, setHidden] = useState(true);
  const filterArray = useSelector(state => state.filter);

  const handleOpenFilter = () => {
    setHidden(!hidden);
  };

  return (
    <S.Wrapper>
      <S.Title onClick={() => handleOpenFilter()} active={!hidden}>
        {title}
        {filterArray.length > 0 && <S.Sup>{filterArray.length}</S.Sup>}
      </S.Title>
      <S.List active={!hidden}>
        <CustomScrollbars>
          {list.map((el, i) => (
            <S.Item key={i}>
              <Checkbox
                name={el}
                handleChange={() => handleChange(el)}
                type="dropdown"
                checked_state={filterArray.indexOf(el) !== -1}
              />
            </S.Item>
          ))}
        </CustomScrollbars>
      </S.List>
    </S.Wrapper>
  );
};

export default TeamsFilter;
