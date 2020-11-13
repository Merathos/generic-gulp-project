import { Checkbox } from 'elements';
import { useSelector } from 'react-redux';
import * as S from './styles';

const TeamsFilter = props => {
  const {
    data: { title, list },
    handleChange,
  } = props;
  const filterArray = useSelector(state => state.filter);

  return (
    <S.Wrapper>
      <S.Title>
        {title}
        {filterArray.length > 0 && <S.Sup>{filterArray.length}</S.Sup>}
      </S.Title>
      <S.List>
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
      </S.List>
    </S.Wrapper>
  );
};

export default TeamsFilter;
