import ArrowRight from 'public/icons/arrow-right.svg';
import Link from 'next/link';
import * as S from './styles';

const RelocationFooter = ({ data }) => {
  return (
    <S.Section>
      <S.Container>
        <S.List>
          {data.map((el, i) => (
            <Link href={el.href} key={i}>
              <S.Element>
                <S.Title>{el.title}</S.Title>
                <S.Text>{el.text}</S.Text>
                <ArrowRight />
              </S.Element>
            </Link>
          ))}
        </S.List>
      </S.Container>
    </S.Section>
  );
};

export default RelocationFooter;
