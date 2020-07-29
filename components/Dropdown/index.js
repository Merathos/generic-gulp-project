import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Title, Item, List, Label, Wrapper } from './styles';

const Dropdown = props => {
  const {
    data: { title, list, multi }
  } = props;
  const [opened, setOpened] = useState(false);
  const [checked, setChecked] = useState('');
  const dispatch = useDispatch();
  const filterArray = useSelector(state => state.filter);

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
        <Wrapper>
          <List>
            {list.map((el, i) => (
              <Item key={i}>
                <input
                  type={multi ? 'checkbox' : 'radio'}
                  name={multi ? el : title}
                  id={el}
                  onChange={() => handleChange(el)}
                  disabled={filterArray.indexOf(el) === -1 ? false : true}
                />
                <Label htmlFor={el}>{el}</Label>
              </Item>
            ))}
          </List>
        </Wrapper>
      )}
    </ul>
  );
};

export default Dropdown;
