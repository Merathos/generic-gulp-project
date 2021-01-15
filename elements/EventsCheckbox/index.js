import { Label, Wrapper } from './styles';

const EventsCheckbox = ({
  name,
  value,
  checked = false,
  onChange,
  color,
  className,
  children,
  register,
  error,
}) => {
  return (
    <Wrapper error={error} className={className} color={color}>
      <input
        type="checkbox"
        id={name}
        name={name}
        onChange={onChange}
        checked={checked}
        ref={register}
      />
      <Label htmlFor={name}>
        {value}
        {children}
      </Label>
    </Wrapper>
  );
};

export default EventsCheckbox;
