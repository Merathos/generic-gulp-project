import { useRouter } from 'next/router';
import { FilterButton } from 'elements';
import { queryHelpers } from 'helpers/query-helpers';
import * as S from './styles';

const { checkTagActive, generateNewTags } = queryHelpers;

const EventsTags = ({ eventCategories }) => {
  const router = useRouter();
  const { pathname, query } = router;

  const handleClick = (slug, isActive) => {
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

  return (
    <>
      {query.categories && (
        <S.Tags>
          {eventCategories.map(item => {
            const isActive = checkTagActive(query.categories, item.slug);
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
