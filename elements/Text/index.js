import * as S from './styles';

const Text = ({ children, className, bold }) => (
  <S.Text className={className} bold={bold}>
    {children}
  </S.Text>
);

export default Text;
