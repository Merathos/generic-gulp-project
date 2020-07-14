import { FilterButton, Checkbox } from 'elements';
import { Dropdown } from 'components';
import { Wrapper, Container, List } from './styles';

const Filter = props => {
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
      <FilterButton name={discard} />
    </Wrapper>
  );
};

export default Filter;
