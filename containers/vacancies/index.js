import Router from 'next/router';
import { VacanciesList } from 'components';
import { Container, Title } from './styles';
import { Search } from '../../forms';

const title = 'Вакансии';
const placeHolder = 'Введите название вакансии';

const handleSearch = searchValue => {
  Router.push({
    pathname: '/vacancies',
    query: { search: searchValue },
  }).then(() => window.scrollTo(0, 0));
};

const Vacancies = ({ data }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Search
        isMain={true}
        placeholder={placeHolder}
        handleSearch={search => handleSearch(search)}
      />
      <VacanciesList data={data} />
    </Container>
  );
};

export default Vacancies;
