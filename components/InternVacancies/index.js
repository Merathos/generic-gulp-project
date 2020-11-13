import Link from 'next/link';
import { Button } from 'elements';
import { Advert } from 'components';
import * as S from './styles';

const InternVacancies = ({ mock, back }) => {
  const { title, button } = mock;
  return (
    <>
      <S.Title>{title}</S.Title>
      {back && (
        <S.List>
          {back.map((el, i) => (
            <li key={i}>
              <Advert data={el} />
            </li>
          ))}
        </S.List>
      )}
      <Link href="/catalog">
        <a>
          <Button>{button}</Button>
        </a>
      </Link>
    </>
  );
};

export default InternVacancies;
