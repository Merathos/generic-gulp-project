import Link from 'next/link';
import {
  List,
  ListColumn,
  ListItem,
  VacancyQuantity,
  VacancyTitle,
} from './styles';

const VacanciesList = ({ vacancyCat }) => {
  const oddItems = vacancyCat.filter((item) => item.id % 2 === 0);
  const evenItems = vacancyCat.filter((item) => item.id % 2 === 1);

  return (
    <List>
      <ListColumn>
        {evenItems.map((item) => (
          <ListItem key={item.id}>
            <VacancyQuantity>{item.vacancy_count}</VacancyQuantity>
            <Link href={`/vacancies?categories=${item.slug}`} passHref>
              <VacancyTitle>{item.name}</VacancyTitle>
            </Link>
          </ListItem>
        ))}
      </ListColumn>
      <ListColumn>
        {oddItems.map((item) => (
          <ListItem key={item.id}>
            <VacancyQuantity>{item.vacancy_count}</VacancyQuantity>
            <Link href={`/vacancies?categories=${item.slug}`} passHref>
              <VacancyTitle>{item.name}</VacancyTitle>
            </Link>
          </ListItem>
        ))}
      </ListColumn>
    </List>
  );
};

export default VacanciesList;
