import { useState } from 'react';
import { BlogsTag } from 'elements';
import { Section, Element } from './styles';
import Swiper from 'react-id-swiper';

const BlogsFilter = ({ filterTabs }) => {
  const [checkedItems, setCheckedItems] = useState({});

  const handleChange = event => {
    setCheckedItems({
      ...checkedItems,
      [event.target.id]: event.target.checked,
    });
  };

  const params = {
    slidesPerView: 'auto',
    loop: false,
  };

  return (
    <Section>
      <Swiper {...params}>
        {filterTabs.map((item, i) => (
          <Element key={i}>
            <BlogsTag
              name={item.name}
              label={item.title}
              id={item.name}
              checked={checkedItems[item.name]}
              onChange={handleChange}
            />
          </Element>
        ))}
      </Swiper>
    </Section>
  );
};

export default BlogsFilter;
