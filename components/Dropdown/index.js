import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Title, Item, List, Label } from './styles';

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
    dispatch({ type: 'CATALOG_FILTER', payload: checked });
  };

  return (
    <ul>
      <Title type="button" onClick={() => openDropdown()} active={opened}>
        {title}
      </Title>
      {opened && (
        <List>
          {list.map((el, i) => (
            <Item key={i}>
              <input
                type={multi ? 'checkbox' : 'radio'}
                name={multi ? el : title}
                id={el}
                defaultChecked={false}
                onChange={() => handleChange(el)}
              />
              <Label htmlFor={el}>{el}</Label>
            </Item>
          ))}
        </List>
      )}
    </ul>
  );
};

export default Dropdown;
