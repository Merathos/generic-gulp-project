import { EventsCheckbox } from 'elements';
import { useRouter } from 'next/router';
import { queryHelpers } from 'helpers/query-helpers';
import { Item, List, ResetFilter, Wrapper } from './styles';

const { checkTagActive, generateNewTags } = queryHelpers;

const EventsFilter = ({ eventCategories, resetButtonText }) => {
  const router = useRouter();
  const { pathname, query } = router;

  const handleChange = (slug, isActive) => {
    router.push(
      {
        pathname,
        query: {
          ...query,
          categories: generateNewTags(query.categories, slug, isActive),
        },
      },
      undefined,
      { shallow: true }
    );
  };

  const handleReset = () => {
    router.push(
      {
        pathname,
      },
      undefined,
      { shallow: true }
    );
  };

  return (
    <Wrapper>
      <List>
        {eventCategories.map((item) => {
          const isActive = checkTagActive(query.categories, item.slug);
          return (
            <Item key={item.id}>
              <EventsCheckbox
                name={item.name}
                value={item.name}
                checked={isActive}
                slug={item.slug}
                onChange={() => handleChange(item.slug, isActive)}
                color={item.color}
              />
            </Item>
          );
        })}
      </List>
      <ResetFilter
        type="button"
        onClick={handleReset}
        show={query.categories?.length > 0}
      >
        {resetButtonText}
      </ResetFilter>
    </Wrapper>
  );
};

export default EventsFilter;
