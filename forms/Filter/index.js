import { Dropdown, FilterButton, Checkbox } from 'elements';

const Filter = props => {
  const {
    data: { fields, internship, english, discard }
  } = props;
  return (
    <>
      <div>
        {fields.map(el => (
          <Dropdown data={el} />
        ))}
      </div>
      <Checkbox name={internship} />
      <Checkbox name={english} />
      <FilterButton name={discard} />
    </>
  );
};

export default Filter;
