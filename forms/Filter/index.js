import { FilterButton, Checkbox } from 'elements';
import { Dropdown } from 'components';
import { Wrapper, Container, List } from './styles';
import { useDispatch } from 'react-redux';

const Filter = props => {
  const dispatch = useDispatch();
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
        <Checkbox name={internship} />
        <Checkbox name={english} />
      </Container>
      <FilterButton name={discard} handleChange={() => dispatch({ type: 'CLEAR_ALL_FILTERS' })} />
    </Wrapper>
  );
};

export default Filter;
