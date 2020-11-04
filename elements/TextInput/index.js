import { Wrapper } from './styles';

const TextInput = ({
  type = 'text',
  name,
  label,
  className,
  required = true,
  cv,
  correct,
  warning,
  error,
  errorMsg,
  date = false,
}) => {
  const onKeyPress = function(e) {
    let input = e.target;
    if (e.charCode < 47 || e.charCode > 57) {
      e.preventDefault();
    }
    var len = input.value.length;

    if (len !== 1 || len !== 3) {
      if (e.charCode == 47) {
        e.preventDefault();
      }
    }

    if (len === 2) {
      input.value += '/';
    }

    if (len === 5) {
      input.value += '/';
    }
  };

  return (
    <Wrapper
      className={className}
      cv={cv}
      correct={correct}
      warning={warning}
      error={error}
    >
      {errorMsg && <p>{errorMsg}</p>}
      <input
        type={type}
        placeholder=" "
        name={name}
        id={name}
        autoComplete="off"
        required={required}
        maxLength={date ? 10 : 9999}
        onKeyPress={date ? onKeyPress : () => {}}
      />
      <label htmlFor={name}>{label}</label>
    </Wrapper>
  );
};

export default TextInput;
