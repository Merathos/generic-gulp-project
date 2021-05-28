import * as S from './styles';

const Btn = ({ type = 'button', children, className, accent, onClick }) => {
  return (
    <S.Button
      type={type}
      onClick={onClick}
      className={className}
      accent={accent}
    >
      {children}
    </S.Button>
  );
};

export default Btn;
