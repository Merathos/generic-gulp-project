import { Checkbox } from 'elements';
import { CustomScrollbars } from 'components';
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
      <S.Title>{title}</S.Title>
      <S.List>
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
