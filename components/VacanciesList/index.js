import Link from 'next/link';
import { List, ListItem, VacancyQuantity, VacancyTitle } from './styles';

const VacanciesList = ({ vacancyCat }) => {
  return (
    <List>
      {vacancyCat.map(item => (
        <ListItem key={item.id}>
          <VacancyQuantity>{item.vacancy_count}</VacancyQuantity>
          <Link href={`/vacancies?categories=${item.slug}`} passHref>
            <VacancyTitle>{item.name}</VacancyTitle>
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

export default VacanciesList;
