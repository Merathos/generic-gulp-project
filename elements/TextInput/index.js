import InputMask from 'react-input-mask';
import { Controller } from 'react-hook-form';
import { repeat } from 'lodash';
import { Wrapper } from './styles';

function replaceMaskWithLetter(value = '', letter, length) {
  const newValue = value.replace(/[^0-9]/g, '');
  return newValue + repeat(letter, length - newValue.length);
}

function fillInMaskWithLetters(value) {
  if (!value) return '';

  const [day, month, year] = value.split('.');

  return [
    replaceMaskWithLetter(day, 'д', 2),
    replaceMaskWithLetter(month, 'м', 2),
    replaceMaskWithLetter(year, 'г', 4),
  ].join('.');
}

function findFirstPlaceholderIndex(value) {
  const placeholderPositions = [
    value.indexOf('д'),
    value.indexOf('м'),
    value.indexOf('г'),
  ].filter((position) => position >= 0);

  if (placeholderPositions.length === 0) return null;
  return Math.min(...placeholderPositions);
}

function validateDate(value) {
  const [day, month, year] = value.split('.');

  // DAY
  if (
    parseInt(day, 10) > 31 ||
    (day?.charAt(0) === '0' && parseInt(day?.charAt(1), 10) < 1)
  ) {
    return false;
  }

  // MONTH
  if (
    parseInt(month, 10) > 12 ||
    (month?.charAt(0) === '0' && parseInt(month?.charAt(1), 10) < 1)
  ) {
    return false;
  }

  // YEAR
  if (
    year?.charAt(0) === '1' &&
    year?.charAt(1) !== '_' &&
    year?.charAt(1) !== '9'
  ) {
    return false;
  }
  if (
    year?.charAt(0) === '2' &&
    year?.charAt(1) !== '_' &&
    year?.charAt(1) !== '0'
  ) {
    return false;
  }
  if (
    year?.charAt(0) === '2' &&
    year?.charAt(1) === '0' &&
    year?.charAt(2) !== '_' &&
    parseInt(year?.charAt(2), 10) > 1
  ) {
    return false;
  }

  return true;
}

function beforeMaskedValueChange(newState, oldState) {
  const valid = validateDate(newState.value);

  if (valid) {
    const value = fillInMaskWithLetters(newState.value);
    let { selection } = newState;

    if (selection && selection.length === 1) {
      const index =
        findFirstPlaceholderIndex(value) || Math.max(0, value.length - 1);

      selection = {
        start: index,
        end: index,
        length: 1,
      };
    }
    return { value, selection };
  }
  return oldState;
}

const formatChars = {
  e: '[0-3]',
  d: '[0-9]',
  n: '[0-1]',
  m: '[0-9]',
  z: '[1-2]',
  y: '[0-9]',
};

const TextInput = ({
  type = 'text',
  name,
  label,
  className,
  required,
  cv,
  correct,
  warning,
  error,
  errorMsg,
  register,
  mask,
  maskChar,
  maskPlaceholder,
  control,
  isDate,
}) => {
  if (mask && isDate) {
    return (
      <Wrapper
        className={className}
        cv={cv}
        correct={correct}
        warning={warning}
        error={error}
      >
        {errorMsg && <p>{errorMsg}</p>}
        <Controller
          as={InputMask}
          type={type}
          placeholder=" "
          name={name}
          id={name}
          autoComplete="off"
          required={required}
          control={control}
          maskChar={maskChar}
          maskplaceholder={maskPlaceholder}
          mask="ed.nm.zyyy"
          beforeMaskedValueChange={beforeMaskedValueChange}
          formatChars={formatChars}
        />
        <label htmlFor={name}>{label}</label>
      </Wrapper>
    );
  }
  if (mask) {
    return (
      <Wrapper
        className={className}
        cv={cv}
        correct={correct}
        warning={warning}
        error={error}
      >
        {errorMsg && <p>{errorMsg}</p>}
        <Controller
          as={InputMask}
          type={type}
          placeholder=" "
          name={name}
          id={name}
          autoComplete="off"
          required={required}
          control={control}
          mask={mask}
          maskChar={maskChar}
          maskplaceholder={maskPlaceholder}
        />
        <label htmlFor={name}>{label}</label>
      </Wrapper>
    );
  }
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
        ref={register}
      />
      <label htmlFor={name}>{label}</label>
    </Wrapper>
  );
};

export default TextInput;
