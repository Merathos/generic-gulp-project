import * as S from './styles';

const RadioButton = ({ name, handleChange, value, checked, label }) => {
  return (
    <>
      <input
        type="radio"
        name={name}
        id={value}
        onChange={(e) => handleChange(e.target.id)}
        onClick={(e) => handleChange(checked ? '' : e.target.id)}
        checked={checked}
      />
      <S.Label htmlFor={value}>{label || value}</S.Label>
    </>
  );
};

export default RadioButton;
