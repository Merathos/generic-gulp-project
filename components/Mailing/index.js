import * as S from './styles';

const Mailing = (props) => {
  const {
    data: { link, linkHref, text }
  } = props;
  
  return (
    <S.Container>
      <S.Text>
        <S.Link href={linkHref}>{link}</S.Link>
        {text}
      </S.Text>
    </S.Container>
  );
};

export default Mailing;