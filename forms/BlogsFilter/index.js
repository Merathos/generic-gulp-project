import { useCallback } from 'react';
import { BlogsTag } from 'elements';
import Swiper from 'react-id-swiper';
import { useRouter } from 'next/router';
import { queryHelpers } from 'helpers/query-helpers';
import { Section, Element } from './styles';

const { checkTagActive } = queryHelpers;

const BlogsFilter = ({ categories }) => {
  const router = useRouter();
  const { pathname, query } = router;

  const params = {
    slidesPerView: 'auto',
    loop: false,
  };

  const onCategoryClick = useCallback((slug, isActive) => {
    if (isActive) {
      delete query.category;
      router.push(
        {
          pathname,
          query: {
            ...query,
          },
        },
        undefined,
        { shallow: true }
      );
    } else {
      router.push(
        {
          pathname,
          query: {
            ...query,
            category: slug,
          },
        },
        undefined,
        { shallow: true }
      );
    }
  }, []);

  return (
    <Section>
      <Swiper {...params}>
        {categories.map(item => {
          const isActive = checkTagActive(query.category, item.slug);
          return (
            <Element key={item.id}>
              <BlogsTag
                name={item.name}
                label={item.name}
                id={item.id}
                checked={isActive}
                onClick={() => onCategoryClick(item.slug, isActive)}
              />
            </Element>
          );
        })}
      </Swiper>
    </Section>
  );
};

export default BlogsFilter;
