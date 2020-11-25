import Link from 'next/link';
import * as S from './styles';

const HighlightCard = props => {
  const {
    data: { title, icon, text, img, bgImg, bgMob },
  } = props;

  return (
    <Link href={`#`}>
      <S.Wrapper className="js-content" bgImg={bgImg} bgMob={bgMob}>
        <S.Content>
          <S.Title>
            {title}
            {icon && <img src={icon} width={20} height={20} alt="icon" />}
          </S.Title>
          <S.Text>{text}</S.Text>
        </S.Content>
        <S.Picture src={img} alt={title} width="210" height="254" />
      </S.Wrapper>
    </Link>
  );
};

export default HighlightCard;
