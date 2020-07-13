import { Dropdown, FilterButton, Checkbox } from 'elements';
import { Wrapper, Container } from './styles';

const Filter = props => {
  const {
    data: { fields, internship, english, discard }
  } = props;
  return (
    <Wrapper>
      <ul>
        {fields.map((el, i) => (
          <Dropdown key={i} data={el} />
        ))}
      </ul>
      <Container>
        <Checkbox name={internship} />
        <Checkbox name={english} />
      </Container>
      <FilterButton name={discard} />
    </Wrapper>
  );
};

export default Filter;
