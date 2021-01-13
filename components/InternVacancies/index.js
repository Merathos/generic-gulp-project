import Link from 'next/link';
import { Btn } from 'elements';
import { VacancyCard } from 'components';
import * as S from './styles';

const InternVacancies = ({ mock, data }) => {
  const { title, button, href } = mock;

  return (
    <>
      <S.Title>{title}</S.Title>
      <S.List>
        {data.map((item, index) => (
          <S.ListItem key={index}>
            <VacancyCard data={item} />
          </S.ListItem>
        ))}
      </S.List>
      <Link href={href} passHref>
        <a>
          <Btn>{button}</Btn>
        </a>
      </Link>
    </>
  );
};

export default InternVacancies;
