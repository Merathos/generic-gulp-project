import { Label, Wrapper } from './styles';

const EventsCheckbox = ({
  name,
  value,
  checked = false,
  onChange,
  className,
  children,
  register,
  error,
}) => {
  return (
    <Wrapper error={error} className={className}>
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
