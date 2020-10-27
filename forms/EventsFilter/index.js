import { useRouter } from 'next/router';
import { EventsCheckbox } from 'elements';
import {
  generateCategories,
  checkActiveCategories,
} from 'helpers/events-helpers';
import { Wrapper, List, Item, ResetFilter } from './styles';

const EventsFilter = ({ eventCategories, pageSlug, resetButtonText }) => {
  const router = useRouter();
  const { query } = router;

  const handleChange = (slug, isActive) => {
    router.push({
      pathname: pageSlug,
      query: {
        ...query,
        categories: generateCategories(query.categories, slug, isActive),
      },
    });
  };

  const onReset = () => {
    router.push(pageSlug);
  };

  return (
    <Wrapper>
      <List>
        {eventCategories.map(item => {
          const isActive = checkActiveCategories(query.categories, item.slug);
          return (
            <Item key={item.id}>
              <EventsCheckbox
                name={item.name}
                checked={isActive}
                slug={item.slug}
                onChange={() => handleChange(item.slug, isActive)}
                color={item.color}
              />
            </Item>
          );
        })}
      </List>
      <ResetFilter type="button" onClick={() => onReset()}>
        {resetButtonText}
      </ResetFilter>
    </Wrapper>
  );
};

export default EventsFilter;
