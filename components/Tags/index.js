import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { FilterButton } from 'elements';

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  min-height: 32px;
`;

const Element = styled.li`
  margin-right: 22px;
`;

const Tags = () => {
  const dispatch = useDispatch();
  const filterArray = useSelector(state => state.filter);

  return (
    <List>
      {filterArray.length !== 0 && (
        filterArray.map((el, i) => (
        <Element key={i}>
            <FilterButton
              name={el}
              handleChange={() =>
                dispatch({ type: 'CLEAR_FILTER', payload: el })}
            />
        </Element>
      )))}
    </List>
  )
}

export default Tags;