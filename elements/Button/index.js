import * as S from './styles';

const Button = ({ type = 'default', children, className, onClick }) => (
  <>
    {
      {
        accent: (
          <S.Accent type="button" className={className} onClick={onClick}>
            {children}
          </S.Accent>
        ),
        default: <S.Default className={className}>{children}</S.Default>,
      }[type]
    }
  </>
);

export default Button;
