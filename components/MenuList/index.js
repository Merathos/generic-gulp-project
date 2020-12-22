import Link from 'next/link';
import Router from 'next/router';
import { List, ListItem, Title, SpecialMark } from './styles';

const routeMap = {
  'О компании': '/about',
  'IT Evenings': '/events',
  Команды: '/teams',
  Блог: '/blog',
  Вакансии: '/vacancies',
  Релокация: '/relocation',
  Стажировки: '/internship',
  Контакты: '/contacts',
};

const MenuList = ({ data, onMenuClose }) => {
  return (
    <List>
      {data.map((item, index) => {
        const isActive = routeMap[item.title] === Router.pathname;

        return (
          <ListItem key={index}>
            <Link href={routeMap[item.title]} passHref>
              <Title isActive={isActive} onClick={isActive && onMenuClose}>
                {item.title}
              </Title>
            </Link>
            {item.isSpecial && (
              <SpecialMark
                src="/emodzi/star.png"
                alt="Special"
                width="120"
                height="120"
              />
            )}
          </ListItem>
        );
      })}
    </List>
  );
};

export default MenuList;
