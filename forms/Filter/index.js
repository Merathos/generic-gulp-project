import { useState } from 'react';
import { FilterButton, Checkbox } from 'elements';
import { Dropdown } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { Wrapper, Container, List } from './styles';

const Filter = props => {
  const dispatch = useDispatch();
  const internship_state = useSelector(state => state.internship);
  const english_state = useSelector(state => state.english);
  const [opened, setOpened] = useState('');

  const openDropdown = e => {
    if (opened === e) {
      setOpened('');
    } else {
      setOpened(e);
    }
  };

  const {
    data: { fields, internship, english, discard }
  } = props;
  return (
    <Wrapper>
      <List>
        {fields.map((el, i) => (
          <Dropdown
            key={i}
            data={el}
            handleOpen={() => openDropdown(el.title)}
            opened={opened === el.title}
            handleChange={e => dispatch({ type: 'CATALOG_FILTER', payload: e })}
          />
        ))}
      </List>
      <Container>
        <Checkbox
          name={internship}
          checked_state={internship_state}
          handleChange={() => dispatch({ type: 'CATALOG_INTERNSHIP' })}
        />
        <Checkbox
          name={english}
          checked_state={english_state}
          handleChange={() => dispatch({ type: 'CATALOG_ENGLISH' })}
        />
      </Container>
      <FilterButton
        name={discard}
        handleChange={() => dispatch({ type: 'CLEAR_ALL_FILTERS' })}
      />
    </Wrapper>
  );
};

export default Filter;
