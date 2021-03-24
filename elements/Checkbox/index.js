import { Wrapper, Label, DropLabel } from './styles';

const Checkbox = (props) => {
  const { name, handleChange, type, checked_state } = props;

  const id = props.id || name;
  return (
    <>
      {type === 'dropdown' ? (
        <>
          <input
            type="checkbox"
            id={id}
            onChange={() => handleChange()}
            checked={checked_state}
          />
          <DropLabel htmlFor={id} checked={checked_state}>
            {name}
          </DropLabel>
        </>
      ) : (
        <Wrapper>
          <input
            type="checkbox"
            id={id}
            onChange={() => handleChange()}
            checked={checked_state}
          />
          <Label htmlFor={id} checked={checked_state}>
            {name}
          </Label>
        </Wrapper>
      )}
    </>
  );
};

export default Checkbox;
