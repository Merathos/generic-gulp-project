import { Btn } from 'elements';
import { VacancyCard } from 'components';
import Router from 'next/router';
import * as S from './styles';

const InternVacancies = ({ mock, data }) => {
  const { title, button } = mock;

  const handleVacanciesClick = () => {
    Router.push({
      pathname: '/vacancies',
      query: 'internship=true',
    }).then(() => window.scrollTo(0, 0));
  };

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

      <Btn onClick={handleVacanciesClick}>{button}</Btn>
    </>
  );
};

export default InternVacancies;
