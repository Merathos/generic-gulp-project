import { FilterButton, Checkbox } from 'elements';
import { Dropdown } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { Wrapper, Container, List } from './styles';

const Filter = props => {
  const dispatch = useDispatch();
  const internship_state = useSelector(state => state.internship);
  const english_state = useSelector(state => state.english);

  const {
    data: { fields, internship, english, discard }
  } = props;
  return (
    <Wrapper>
      <List>
        {fields.map((el, i) => (
          <Dropdown key={i} data={el} />
        ))}
      </List>
      <Container>
        <Checkbox
          name={internship}
          checked_state={internship_state}
          handleChange={value =>
            dispatch({ type: 'CATALOG_INTERNSHIP', payload: value })
          }
        />
        <Checkbox
          name={english}
          checked_state={english_state}
          handleChange={value =>
            dispatch({ type: 'CATALOG_ENGLISH', payload: value })
          }
        />
      </Container>
      <FilterButton
        name={discard}
        handleChange={() => dispatch({ type: 'CLEAR_ALL_FILTERS' })}
      />
    </Wrapper>
  );
};

export default Filter;
