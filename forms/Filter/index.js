import { Dropdown, FilterButton, Checkbox } from 'elements';
import { Wrapper } from './styles';

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
      <Checkbox name={internship} />
      <Checkbox name={english} />
      <FilterButton name={discard} />
    </Wrapper>
  );
};

export default Filter;
