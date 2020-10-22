import { Label, Wrapper } from './styles';

const EventsCheckbox = ({ name, checked = false, onChange, color }) => {
  return (
      <Wrapper color={color}>
          <input
            type="checkbox"
            id={name}
            onChange={onChange}
            checked={checked}
          />
          <Label htmlFor={name}>{name}</Label>
      </Wrapper>
  );
};

export default EventsCheckbox;