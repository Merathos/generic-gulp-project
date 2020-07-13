import { useState } from 'react';
import { Title, Item } from './styles';

const Dropdown = props => {
  const {
    data: { title, list }
  } = props;
  const [opened, setOpened] = useState(false);
  const [checked, setChecked] = useState('');

  const openDropdown = () => {
    if (opened) {
      setOpened(false);
    } else {
      setOpened(true);
    }
  };

  return (
    <li>
      <Title type="button" onClick={() => openDropdown()} active={opened}>
        {title}
      </Title>
      {opened && (
        <ul>
          {list.map((el, i) => (
            <Item key={i} active={checked === el}>
              <label htmlFor={el}>
                <input
                  type="radio" // checkbox?
                  name={title}
                  id={el}
                  onChange={() => setChecked(el)}
                />
                {el}
              </label>
            </Item>
          ))}
        </ul>
      )}
    </li>
  );
};

export default Dropdown;
