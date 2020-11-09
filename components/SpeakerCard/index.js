import * as S from './styles';

const SpeakerCard = props => {
  const {
    data: { bigImg, name, job, text },
  } = props;

  return (
    <S.Wrapper>
      <S.Photo src={bigImg} alt={name} width="363" height="252" />
      <S.Name>{name}</S.Name>
      <S.Job>{job}</S.Job>
      <S.Text>{text}</S.Text>
    </S.Wrapper>
  );
};

export default SpeakerCard;
