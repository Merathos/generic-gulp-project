import Router from 'next/router';
import { VacanciesList } from 'components';
import { Search } from 'forms';
import { Container, Title } from './styles';

const title = 'Вакансии';
const placeHolder = 'Введите название вакансии';

const handleSearch = searchValue => {
  Router.push({
    pathname: '/vacancies',
    query: { search: searchValue },
  }).then(() => window.scrollTo(0, 0));
};

const Vacancies = ({ vacancyCat }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Search
        isMain
        placeholder={placeHolder}
        handleSearch={search => handleSearch(search)}
      />
      {vacancyCat?.length > 0 && <VacanciesList vacancyCat={vacancyCat} />}
    </Container>
  );
};

export default Vacancies;
