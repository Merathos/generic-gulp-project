import { useState } from 'react';
import { Wrapper } from './styles';

const Checkbox = props => {
  const { name } = props;
  const [checked, setChecked] = useState(false);

  return (
    <Wrapper checked={checked}>
      <label htmlFor={name}>
        <input
          type="checkbox"
          id={name}
          onChange={() => (checked ? setChecked(false) : setChecked(true))}
        />
        {name}
      </label>
    </Wrapper>
  );
};

export default Checkbox;
