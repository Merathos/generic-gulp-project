import { useState } from "react";
import { EventsCheckbox, FilterButton } from 'elements';
import { Wrapper, List, Item } from "./styles";

const EventsFilter = (props) => {
  const {
    data: { filterFields, discard }
  } = props;

  const [checkedItems, setCheckedItems] = useState({});

  const handleChange = event => {
    setCheckedItems({
      ...checkedItems,
      [event.target.id]: event.target.checked
    });
  };

  return (
    <Wrapper>
      <List>
      {filterFields.map((item, i) => (
        <Item key={i}>
          <EventsCheckbox
            name={item.name}
            checked={checkedItems[item.name]}
            onChange={handleChange}
            color={item.color}
          />
        </Item>
      ))}
      </List>
      <FilterButton
        name={discard}
        handleChange={() => {
          setCheckedItems({});
        }}
      />
    </Wrapper>
  );
};

export default EventsFilter;