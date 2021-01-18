import * as S from './styles';

const Metro = props => {
  const {
    data: { title, image, subtitle },
  } = props;

  return (
    <S.Container style={{ backgroundImage: `url(${image})` }}>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
    </S.Container>
  );
};

export default Metro;
