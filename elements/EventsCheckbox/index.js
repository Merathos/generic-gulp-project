import { Label, Wrapper } from './styles';

const EventsCheckbox = ({
  name,
  value,
  checked = false,
  onChange,
  color,
  className,
  children,
  reference,
}) => {
  return (
    <Wrapper color={color} className={className}>
      <input
        type="checkbox"
        id={name}
        name={name}
        onChange={onChange}
        checked={checked}
        ref={reference}
      />
      <Label htmlFor={name}>
        {value}
        {children}
      </Label>
    </Wrapper>
  );
};

export default EventsCheckbox;
