import * as S from './styles';

const SpeakerCard = props => {
  const {
    data: { image, name, company, description },
  } = props;

  return (
    <S.Wrapper>
      {image && (
        <S.Photo
          src={image?.path?.normal}
          srcSet={`${image?.path?.retina} 2x`}
          alt={name}
          width="363"
          height="252"
          loading="lazy"
        />
      )}
      {name && <S.Name>{name}</S.Name>}
      {company && <S.Job>{company}</S.Job>}
      {description && <S.Text>{description}</S.Text>}
    </S.Wrapper>
  );
};

export default SpeakerCard;
