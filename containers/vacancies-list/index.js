import { useState } from 'react';
import { useRouter } from 'next/router';
import { FilterButton, Checkbox, Container } from 'elements';
import { Dropdown, Cards, SidebarArticle, Tags, JobForm } from 'components';
import { Search } from 'forms';
import ArrowRight from 'public/icons/arrow-right.svg';
import Link from 'next/link';
import formMock from 'mock/forms';
import { queryHelpers } from 'helpers/query-helpers';
import { FormModal } from 'containers';
import useWindowWidth from 'helpers/useWindowWidth';
import * as S from './styles';

const { generateNewTags } = queryHelpers;

const VacanciesList = ({ data: mock, back, categories, stacks, teams }) => {
  const router = useRouter();
  const { pathname, query } = router;

  const [opened, setOpened] = useState('');
  const [hidden, setHidden] = useState(true);

  const [isModalOpened, setModalOpen] = useState(false);

  const handleSendRequestClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const initialWidth = useWindowWidth();

  const openDropdown = (e) => {
    if (opened === e) {
      setOpened('');
    } else {
      setOpened(e);
    }
  };

  const handleCategories = (e) => {
    if (e === '') {
      delete query.categories;
      router.push(
        {
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
          query: {
            ...query,
            categories: e,
          },
        },
        undefined,
        { shallow: true }
      );
    }
  };

  const handleFilterClick = (slug, isActive, category) => {
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

  const handleInternship = () => {
    if (query.internship) {
      delete query.internship;
      router.push(
        {
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
          query: {
            ...query,
            internship: !query.internship,
          },
        },
        undefined,
        { shallow: true }
      );
    }
  };

  const handleEnglish = () => {
    if (query.english) {
      delete query.english;
      router.push(
        {
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
          query: {
            ...query,
            english: !query.english,
          },
        },
        undefined,
        { shallow: true }
      );
    }
  };

  const handleSearch = (search) => {
    router.push(
      {
        query: {
          ...query,
          search,
        },
      },
      undefined,
      { shallow: true }
    );
  };

  const resetSearch = () => {
    delete query.search;
    router.push(
      {
        query: {
          ...query,
        },
      },
      undefined,
      { shallow: true }
    );
  };

  const handleOpenFilter = () => {
    setHidden(!hidden);
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

  const {
    filter: { internship, english, discard },
  } = mock;

  const mockFilters = mock.filter?.fields;

  const renderAside = () => (
    <S.Aside>
      <S.Filter>
        <S.List>
          {categories.length > 0 && (
            <Dropdown
              title={mockFilters[0]?.title}
              list={categories}
              handleOpen={() => openDropdown(mockFilters[0]?.title)}
              opened={opened === mockFilters[0]?.title}
              category="categories"
              handleChangeRadio={(e) => handleCategories(e)}
              withBg
            />
          )}
          {stacks.length > 0 && (
            <Dropdown
              title={mockFilters[1]?.title}
              list={stacks}
              handleOpen={() => openDropdown(mockFilters[1]?.title)}
              opened={opened === mockFilters[1]?.title}
              category="technologies"
              handleChangeCheckbox={handleFilterClick}
              withBg
              multi
            />
          )}
          {teams.length > 0 && (
            <Dropdown
              title={mockFilters[2]?.title}
              list={teams}
              handleOpen={() => openDropdown(mockFilters[2]?.title)}
              opened={opened === mockFilters[2]?.title}
              category="teams"
              handleChangeCheckbox={handleFilterClick}
              withBg
              multi
            />
          )}
        </S.List>
        <S.Block>
          <Checkbox
            name={internship}
            checked_state={!!query.internship}
            handleChange={() => handleInternship()}
          />
          <Checkbox
            name={english}
            checked_state={!!query.english}
            handleChange={() => handleEnglish()}
          />
        </S.Block>
        {Object.keys(query).length !== 0 && (
          <FilterButton name={discard} onClick={handleReset} />
        )}
      </S.Filter>
      {initialWidth > 767 && (
        <SidebarArticle
          type="button"
          data={mock.article}
          handleSendRequestClick={handleSendRequestClick}
        />
      )}
    </S.Aside>
  );

  return (
    <S.Main>
      <Container>
        <S.Grid>
          {initialWidth < 768 ? (
            <S.FilterWrapper
              active={!hidden}
              withExtraSpace={!!query.internship}
            >
              <>
                <S.FilterTitle
                  active={!hidden}
                  onClick={() => handleOpenFilter()}
                  type="button"
                >
                  {hidden ? 'Открыть фильтр' : 'Закрыть фильтр'}
                </S.FilterTitle>
                {!hidden && renderAside()}
              </>
            </S.FilterWrapper>
          ) : (
            renderAside()
          )}

          <S.Article>
            <S.Title>{mock.mainTitle}</S.Title>
            <Search
              placeholder={mock.search}
              handleSearch={(search) => handleSearch(search)}
              resetSearch={resetSearch}
              initialValue={router.query.search}
              smallPadding
            />
            <Tags categories={categories} stacks={stacks} teams={teams} />
            {query.internship && (
              <Link href="/internship" passHrref>
                <a>
                  <S.InternshipLink>
                    <S.InternshipLinkText>
                      {mock.internshipText}
                    </S.InternshipLinkText>
                    <ArrowRight />
                  </S.InternshipLink>
                </a>
              </Link>
            )}
          </S.Article>
          {initialWidth < 768 && (
            <S.Resume>
              <S.ResumeButton onClick={handleSendRequestClick}>
                {mock.article.linkText}
              </S.ResumeButton>
              {mock.article.plainText}
            </S.Resume>
          )}
          {back && (
            <S.CardsWrapper>
              <Cards data={back} type="vacancies" />
            </S.CardsWrapper>
          )}
        </S.Grid>
      </Container>
      <FormModal
        modalIsOpen={isModalOpened}
        closeModal={closeModal}
        successData={formMock.jobFormV2.confirmation}
      >
        <JobForm closeModal={closeModal} />
      </FormModal>
      <S.StyledSocialShare />
    </S.Main>
  );
};

export default VacanciesList;
