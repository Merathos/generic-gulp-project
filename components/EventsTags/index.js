import { useRouter } from 'next/router';
import { FilterButton } from 'elements';
import {
  checkActiveCategories,
  generateCategories,
} from 'helpers/events-helpers';
import * as S from './styles';

const EventsTags = ({ eventCategories, pageSlug }) => {
  const router = useRouter();
  const { query } = router;

  const handleClick = (slug, isActive) => {
    router.push({
      pathname: pageSlug,
      query: {
        ...query,
        categories: generateCategories(query.categories, slug, isActive),
      },
    });
  };

  return (
    <>
      {query.categories && (
        <S.Tags>
          {eventCategories.map(item => {
            const isActive = checkActiveCategories(query.categories, item.slug);
            if (isActive) {
              return (
                <S.Tag key={item.id}>
                  <FilterButton
                    name={item.name}
                    onClick={() => handleClick(item.slug, isActive)}
                  />
                </S.Tag>
              );
            }
            return null;
          })}
        </S.Tags>
      )}
    </>
  );
};

export default EventsTags;
