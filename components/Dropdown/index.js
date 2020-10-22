import { useSelector } from 'react-redux';
import { Checkbox, RadioButton } from 'elements';
import { Title, Item, List, Wrapper } from './styles';

const Dropdown = props => {
  const {
    data: { title, list, multi },
    opened,
    handleOpen,
    handleChangeCheckbox,
    handleChangeRadio,
  } = props;
  const filterArray = useSelector(state => state.filter);
  const categories = useSelector(state => state.categories);

  return (
    <>
      <Title type="button" onClick={() => handleOpen()} active={opened}>
        {title}
      </Title>
      <Wrapper style={{ display: opened ? 'block' : 'none' }}>
        <List>
          {list.map((el, i) => (
            <Item key={i}>
              {multi ? (
                <Checkbox
                  name={el}
                  handleChange={() => handleChangeCheckbox(el)}
                  type="dropdown"
                  checked={filterArray.indexOf(el) !== -1}
                />
              ) : (
                <RadioButton
                  name={title}
                  handleChange={e => handleChangeRadio(e)}
                  value={el}
                  checked={categories === el}
                />
              )}
            </Item>
          ))}
        </List>
      </Wrapper>
    </>
  );
};

export default Dropdown;
