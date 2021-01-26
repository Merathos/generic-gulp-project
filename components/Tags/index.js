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
  const { query } = router;

  const handleClick = (slug, isActive, category) => {
    router.push(
      {
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
      const k = Object.keys(obj).filter((key) => obj[key].slug === slug);
      name = obj[k]?.name;
    }

    return name;
  };

  return (
    <List>
      {typeof query.categories === 'string' &&
        getSlugByName(query.categories, categories) && (
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
        query.categories?.map((item) => {
          const name = getSlugByName(item, categories);
          if (!name) return null;
          return (
            <Element key={item}>
              <FilterButton
                name={name}
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

      {typeof query.technologies === 'string' &&
        getSlugByName(query.technologies, stacks) && (
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
        query.technologies?.map((item) => {
          const name = getSlugByName(item, stacks);
          if (!name) return null;
          return (
            <Element key={item}>
              <FilterButton
                name={name}
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

      {typeof query.teams === 'string' && getSlugByName(query.teams, teams) && (
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
        query.teams?.map((item) => {
          const name = getSlugByName(item, teams);
          if (!name) return null;
          return (
            <Element key={item}>
              <FilterButton
                name={name}
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
