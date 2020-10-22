import { useState } from 'react';
import { Wrapper } from './styles';

const Checkbox = props => {
  const [isChecked, setChecked] = useState(false);
  const { name, handleChange } = props;

  const changeCheckbox = () => {
    setChecked(!isChecked);
    handleChange();
  };

  return (
    <Wrapper checked={isChecked}>
      <label htmlFor={name}>
        <input
          type="checkbox"
          value={name}
          id={name}
          onChange={() => changeCheckbox()}
          checked={isChecked}
        />
        {name}
      </label>
    </Wrapper>
  );
};

export default Checkbox;
