import {
  List,
  ListItem,
  VacancyLink,
  VacancyQuantity,
  VacancyTitle,
} from './styles';

const VacanciesList = ({ data }) => {
  const categoriesMap = data.reduce((result, element) => {
    result[element.category] = !result[element.category]
      ? 10
      : result[element.category] + 1;
    return result;
  }, {});

  const categories = Object.keys(categoriesMap);

  return (
    <List>
      {categories.map((category, index) => (
        <ListItem key={index}>
          <VacancyLink>
            <VacancyQuantity>{categoriesMap[category]}</VacancyQuantity>
            <VacancyTitle>{category}</VacancyTitle>
          </VacancyLink>
        </ListItem>
      ))}
    </List>
  );
};

export default VacanciesList;
