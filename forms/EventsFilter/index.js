import { useState } from "react";
import { EventsCheckbox } from 'elements';
import { Wrapper, List, Item, ResetFilter } from "./styles";

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
      <ResetFilter type="button" onClick={() => setCheckedItems({})}>
        {discard}
      </ResetFilter>
    </Wrapper>
  );
};

export default EventsFilter;