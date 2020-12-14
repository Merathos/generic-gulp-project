import { Checkbox, FilterButton } from 'elements';
import { CustomScrollbars } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useRouter } from 'next/router';
import * as S from './styles';

const TeamsFilter = props => {
  const {
    data: { title, list, discard },
    handleChange,
  } = props;
  const [hidden, setHidden] = useState(true);
  const filterArray = useSelector(state => state.filter);
  const router = useRouter();
  const { pathname, query } = router;
  const dispatch = useDispatch();

  const handleOpenFilter = () => {
    setHidden(!hidden);
  };

  return (
    <S.Wrapper active={!hidden}>
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
      {Object.keys(query).length !== 0 && (
        <S.ResetButtonWrapper active={!hidden}>
          <FilterButton
            name={discard}
            onClick={() => {
              router.push(pathname);
              dispatch({ type: 'CLEAR_ALL_FILTERS' });
            }}
          />
        </S.ResetButtonWrapper>
      )}
    </S.Wrapper>
  );
};

export default TeamsFilter;
