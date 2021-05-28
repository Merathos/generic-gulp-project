import ArrowRight from 'public/icons/arrow-right.svg';
import Link from 'next/link';
import { Container } from 'elements';
import * as S from './styles';

const RelocationFooter = ({ data }) => {
  return (
    <S.Section>
      <Container>
        <S.List>
          {data.map((el, i) => (
            <Link href={el.href} key={i}>
              <a>
                <S.Element>
                  <S.Title>{el.title}</S.Title>
                  <S.Text>{el.text}</S.Text>
                  <ArrowRight />
                </S.Element>
              </a>
            </Link>
          ))}
        </S.List>
      </Container>
    </S.Section>
  );
};

export default RelocationFooter;
