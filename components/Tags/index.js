import styled from 'styled-components';
import { FilterButton } from 'elements';
import { useRouter } from 'next/router';
import { queryHelpers } from 'helpers/query-helpers';

const { checkTagActive, generateNewTags } = queryHelpers;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  min-height: 32px;

  @media screen and (max-width: 1024px) {
    margin-bottom: 15px;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 0;
  }
`;

const Element = styled.li`
  margin-right: 22px;
`;

const Tags = ({ categories, stacks, teams }) => {
  const router = useRouter();
  const { pathname, query } = router;

  const handleClick = (slug, isActive, category) => {
    router.push(
      {
        pathname,
        query: {
          ...query,
          [category]: generateNewTags(query[category], slug, isActive),
        },
      },
      undefined,
      { shallow: true }
    );
  };

  const getSlugByName = (slug, obj) => {
    let name;

    if (obj) {
      const k = Object.keys(obj).filter(key => obj[key].slug === slug);
      name = obj[k]?.name;
    }

    return name;
  };

  return (
    <List>
      {typeof query.categories === 'string' && (
        <Element key={query.categories}>
          <FilterButton
            name={getSlugByName(query.categories, categories)}
            onClick={() =>
              handleClick(
                query.categories,
                checkTagActive(query.categories, query.categories),
                'categories'
              )
            }
          />
        </Element>
      )}
      {Array.isArray(query.categories) &&
        query.categories?.map(item => {
          return (
            <Element key={item}>
              <FilterButton
                name={getSlugByName(item, categories)}
                onClick={() =>
                  handleClick(
                    item,
                    checkTagActive(query.categories, item),
                    'categories'
                  )
                }
              />
            </Element>
          );
        })}

      {typeof query.technologies === 'string' && (
        <Element key={query.technologies}>
          <FilterButton
            name={getSlugByName(query.technologies, stacks)}
            onClick={() =>
              handleClick(
                query.technologies,
                checkTagActive(query.technologies, query.technologies),
                'technologies'
              )
            }
          />
        </Element>
      )}
      {Array.isArray(query.technologies) &&
        query.technologies?.map(item => {
          return (
            <Element key={item}>
              <FilterButton
                name={getSlugByName(item, stacks)}
                onClick={() =>
                  handleClick(
                    item,
                    checkTagActive(query.technologies, item),
                    'technologies'
                  )
                }
              />
            </Element>
          );
        })}

      {typeof query.teams === 'string' && (
        <Element key={query.teams}>
          <FilterButton
            name={getSlugByName(query.teams, teams)}
            onClick={() =>
              handleClick(
                query.teams,
                checkTagActive(query.teams, query.teams),
                'teams'
              )
            }
          />
        </Element>
      )}
      {Array.isArray(query.teams) &&
        query.teams?.map(item => {
          return (
            <Element key={item}>
              <FilterButton
                name={getSlugByName(item, teams)}
                onClick={() =>
                  handleClick(item, checkTagActive(query.teams, item), 'teams')
                }
              />
            </Element>
          );
        })}
    </List>
  );
};

export default Tags;
