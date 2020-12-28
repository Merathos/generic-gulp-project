import { useCallback } from 'react';
import { BlogsTag } from 'elements';
import Swiper from 'react-id-swiper';
import { useRouter } from 'next/router';
import { queryHelpers } from 'helpers/query-helpers';
import { Section, Element } from './styles';

const { checkTagActive, generateNewTags } = queryHelpers;

const BlogsFilter = ({ categories }) => {
  const router = useRouter();
  const { query } = router;

  const params = {
    slidesPerView: 'auto',
    loop: false,
  };

  const onCategoryClick = useCallback((q, slug, alreadyHas) => {
    router.push(
      {
        query: {
          ...q,
          categories: generateNewTags(q.categories, slug, alreadyHas),
        },
      },
      undefined,
      { shallow: true }
    );
  }, []);

  return (
    <Section>
      <Swiper {...params}>
        {categories.map(item => {
          const isActive = checkTagActive(query.categories, item.slug);
          return (
            <Element key={item.id}>
              <BlogsTag
                name={item.name}
                label={item.name}
                id={item.id}
                checked={isActive}
                onClick={() => onCategoryClick(query, item.slug, isActive)}
              />
            </Element>
          );
        })}
      </Swiper>
    </Section>
  );
};

export default BlogsFilter;
