import * as S from './styles';

const BenefitCard = ({ data }) => {
  const { image, title, text } = data;
  return (
    <>
      <S.Picture src={image} alt={title} />
      <S.Title>{title}</S.Title>
      <S.Text>{text}</S.Text>
    </>
  );
};

export default BenefitCard;
