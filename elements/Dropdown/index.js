import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Title, Item, List } from './styles';

const Dropdown = props => {
  const {
    data: { title, list, multi }
  } = props;
  const [opened, setOpened] = useState(false);
  const [checked, setChecked] = useState('');
  const dispatch = useDispatch();

  const openDropdown = () => {
    if (opened) {
      setOpened(false);
    } else {
      setOpened(true);
    }
  };

  const handleChange = el => {
    setChecked(el);
    dispatch({ type: 'CATALOG_FILTER', payload: el });
  };

  return (
    <ul>
      <Title type="button" onClick={() => openDropdown()} active={opened}>
        {title}
      </Title>
      {opened && (
        <List>
          {list.map((el, i) => (
            <Item key={i} active={checked === el}>
              <label htmlFor={el}>
                <input
                  type="radio"
                  name={title}
                  id={el}
                  onChange={() => handleChange(el)}
                />
                {el}
              </label>
            </Item>
          ))}
        </List>
      )}
    </ul>  
  );
};

export default Dropdown;
