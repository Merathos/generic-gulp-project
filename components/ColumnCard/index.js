import Link from 'next/link';
import * as S from './styles';

const ColumnCard = props => {
  const {
    data: { title, text, img, date, category },
  } = props;

  return (
    <Link href={`#`}>
      <S.Wrapper className="js-content">
        {img && <S.Picture src={img} alt={title} width="210" height="254" />}
        <S.Date>{date}</S.Date>
        <S.Title>{title}</S.Title>
        <S.Text>{text}</S.Text>
        <S.Type>{category}</S.Type>
      </S.Wrapper>
    </Link>
  );
};

export default ColumnCard;
