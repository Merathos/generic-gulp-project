import * as S from './styles';

const Mailing = props => {
  const {
    data: { link, text },
    onClick,
  } = props;

  return (
    <S.Container>
      <S.Text>
        <S.Link type="button" onClick={onClick}>
          {link}
        </S.Link>
        {text}
      </S.Text>
    </S.Container>
  );
};

export default Mailing;
