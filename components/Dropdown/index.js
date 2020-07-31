import { useSelector } from 'react-redux';
import { Title, Item, List, Label, Wrapper } from './styles';

const Dropdown = props => {
  const {
    data: { title, list, multi },
    opened,
    handleOpen,
    handleChange
  } = props;
  const filterArray = useSelector(state => state.filter);

  return (
    <ul>
      <Title type="button" onClick={() => handleOpen()} active={opened}>
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
                  disabled={filterArray.indexOf(el) !== -1}
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
