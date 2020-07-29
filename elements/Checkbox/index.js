import { Wrapper } from './styles';

const Checkbox = props => {
  const { name, checked_state, handleChange } = props;

  const changeCheckbox = e => {
    const {
      target: { checked }
    } = e;
    handleChange(checked);
  };

  return (
    <Wrapper checked={checked_state}>
      <label htmlFor={name}>
        <input
          type="checkbox"
          id={name}
          onChange={evt => changeCheckbox(evt)}
          checked={checked_state}
        />
        {name}
      </label>
    </Wrapper>
  );
};

export default Checkbox;
