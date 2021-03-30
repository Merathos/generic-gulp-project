import * as S from './styles';

const SmartTextarea = ({ label, placeholder, name, register, error }) => {
  return (
    <S.Label error={error}>
      <span>{label}</span>
      <S.StyledTextarea
        rows={2}
        maxRows={8}
        placeholder={placeholder}
        name={name}
        ref={register}
      />
    </S.Label>
  );
};

export default SmartTextarea;
