import { List, ListItem, VacancyQuantity, VacancyTitle } from './styles';
import Link from 'next/link';

const VacanciesList = ({ data }) => {
  const categoriesMap = data.reduce((result, element) => {
    result[element.category] = !result[element.category]
      ? 10 //should be 1 but 10 for 2-digits number for the layout
      : result[element.category] + 1;
    return result;
  }, {});

  const categories = Object.keys(categoriesMap);

  return (
    <List>
      {categories.map((category, index) => (
        <ListItem key={index}>
          <VacancyQuantity>{categoriesMap[category]}</VacancyQuantity>
          <Link href="/" passHref>
            <VacancyTitle>{category}</VacancyTitle>
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

export default VacanciesList;
