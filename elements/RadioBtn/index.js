import * as S from './styles';

const RadioBtn = ({ name, value, id, label, checked, register, error }) => {
  return (
    <S.Label error={error}>
      <input
        type="radio"
        name={name}
        id={id}
        value={value}
        onChange={() => {}}
        checked={checked}
        ref={register}
      />
      <span>{label}</span>
    </S.Label>
  );
};

export default RadioBtn;
