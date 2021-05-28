import * as S from './styles';

const Subtitle = ({ dangerouslySetInnerHTML, children, className }) => (
  <>
    {dangerouslySetInnerHTML ? (
      <S.Text
        dangerouslySetInnerHTML={dangerouslySetInnerHTML}
        className={className}
      />
    ) : (
      <S.Text className={className}>{children}</S.Text>
    )}
  </>
);

export default Subtitle;
