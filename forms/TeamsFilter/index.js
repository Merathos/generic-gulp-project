import { Checkbox, FilterButton } from 'elements';
import { CustomScrollbars } from 'components';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { queryHelpers } from 'helpers/query-helpers';
import * as S from './styles';

const { checkTagActive, generateNewTags, checkCategoryLength } = queryHelpers;

const TeamsFilter = ({ data: { title, discard }, stacks }) => {
  const [hidden, setHidden] = useState(true);
  const router = useRouter();
  const { pathname, query } = router;

  const handleOpenFilter = () => {
    setHidden(!hidden);
  };

  const handleChange = (slug, isActive) => {
    router.push(
      {
        pathname,
        query: {
          ...query,
          technologies: generateNewTags(query.technologies, slug, isActive),
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
    <S.Wrapper active={!hidden}>
      <S.Title onClick={() => handleOpenFilter()} active={!hidden}>
        {title}
        {query.technologies?.length > 0 && (
          <S.Sup>{checkCategoryLength(query.technologies)}</S.Sup>
        )}
      </S.Title>
      <S.List active={!hidden}>
        <CustomScrollbars>
          {stacks?.length > 0 &&
            Object.keys(stacks).map((item) => {
              const isActive = checkTagActive(
                query.technologies,
                stacks[item].slug
              );
              return (
                <S.Item key={stacks[item].id}>
                  <Checkbox
                    name={stacks[item].name}
                    handleChange={() =>
                      handleChange(stacks[item].slug, isActive)
                    }
                    type="dropdown"
                    checked_state={checkTagActive(
                      query.technologies,
                      stacks[item].slug
                    )}
                  />
                </S.Item>
              );
            })}
        </CustomScrollbars>
      </S.List>
      {Object.keys(query).length !== 0 && (
        <S.ResetButtonWrapper active={!hidden}>
          <FilterButton name={discard} onClick={handleReset} />
        </S.ResetButtonWrapper>
      )}
    </S.Wrapper>
  );
};

export default TeamsFilter;
