import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { FilterButton, Checkbox } from 'elements';
import { Dropdown, Cards, SidebarArticle, Tags, JobForm } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { Search } from 'forms';
import { getNewTags } from 'helpers';
import ArrowRight from 'public/icons/arrow-right.svg';
import Link from 'next/link';
import * as S from './styles';
import { FormModal } from '../index';
import formMock from '../../mock';

const VacanciesList = ({ data: mock, back }) => {
  const router = useRouter();
  const { pathname, query } = router;
  const dispatch = useDispatch();

  const internship_state = useSelector(state => state.internship);
  const english_state = useSelector(state => state.english);

  const [opened, setOpened] = useState('');
  const [hidden, setHidden] = useState(true);
  const filterArray = useSelector(state => state.filter);

  const [isModalOpened, setModalOpen] = useState(false);

  const handleSendRequestClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  function useWindowWidth() {
    const [windowWidth, setWindowWidth] = useState(undefined);

    useEffect(() => {
      function handleResize() {
        setWindowWidth(window.innerWidth);
      }

      window.addEventListener('resize', handleResize);

      handleResize();

      return () => window.removeEventListener('resize', handleResize);
    }, []);
    return windowWidth;
  }

  const initialWidth = useWindowWidth();

  const openDropdown = e => {
    if (opened === e) {
      setOpened('');
    } else {
      setOpened(e);
    }
  };

  useEffect(() => {
    if (english_state) {
      router.push(
        {
          pathname,
          query: {
            ...query,
            english: english_state,
          },
        },
        undefined,
        { shallow: true }
      );
    }
  }, []);

  const handleCategories = e => {
    if (e === '') {
      delete query.categories;
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
      dispatch({ type: 'CATALOG_FILTER_CATEGORIES', payload: e });
    } else {
      router.push(
        {
          pathname,
          query: {
            ...query,
            categories: e,
          },
        },
        undefined,
        { shallow: true }
      );
      dispatch({ type: 'CATALOG_FILTER_CATEGORIES', payload: e });
    }
  };

  const handleCheckbox = e => {
    if (filterArray.indexOf(e) === -1) {
      router.push(
        {
          pathname,
          query: {
            ...query,
            filter: [...filterArray, e],
          },
        },
        undefined,
        { shallow: true }
      );
      dispatch({ type: 'CATALOG_FILTER', payload: e });
    } else {
      const item = filterArray.find(el => el === e);
      const index = filterArray.indexOf(item);

      router.push(
        {
          pathname,
          query: {
            ...query,
            filter: [
              ...filterArray.slice(0, index),
              ...filterArray.slice(index + 1),
            ],
          },
        },
        undefined,
        { shallow: true }
      );
      dispatch({ type: 'CLEAR_FILTER', payload: e });
    }
  };

  const handleInternship = () => {
    if (query.internship) {
      delete query.internship;
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
            internship: !internship_state,
          },
        },
        undefined,
        { shallow: true }
      );
    }
    dispatch({ type: 'CATALOG_INTERNSHIP' });
  };

  const handleEnglish = () => {
    if (query.english) {
      delete query.english;
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
            english: !english_state,
          },
        },
        undefined,
        { shallow: true }
      );
    }
    dispatch({ type: 'CATALOG_ENGLISH' });
  };

  const handleSearch = search => {
    router.push(
      {
        pathname,
        query: {
          ...query,
          search: getNewTags(router.query.search, search),
        },
      },
      undefined,
      { shallow: true }
    );
  };

  const handleClearTags = tag => {
    dispatch({ type: 'CLEAR_FILTER', payload: tag });

    const item = filterArray.find(el => el === tag);
    const index = filterArray.indexOf(item);

    router.push(
      {
        pathname,
        query: {
          ...query,
          filter: [
            ...filterArray.slice(0, index),
            ...filterArray.slice(index + 1),
          ],
        },
      },
      undefined,
      { shallow: true }
    );
  };

  const handleClearCategoryTag = () => {
    delete query.categories;
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
    dispatch({ type: 'CLEAR_FILTER_CATEGORIES' });
  };

  const handleOpenFilter = () => {
    setHidden(!hidden);
  };

  const {
    filter: { fields, internship, english, discard },
  } = mock;

  const renderAside = () => (
    <S.Aside>
      <S.Filter>
        <S.List>
          {fields.map((el, i) => (
            <Dropdown
              key={i}
              data={el}
              handleOpen={() => openDropdown(el.title)}
              opened={opened === el.title}
              handleChangeCheckbox={e => handleCheckbox(e)}
              handleChangeRadio={e => handleCategories(e)}
              withBg
            />
          ))}
        </S.List>
        <S.Block>
          <Checkbox
            name={internship}
            checked_state={internship_state}
            handleChange={() => handleInternship()}
          />
          <Checkbox
            name={english}
            checked_state={english_state}
            handleChange={() => handleEnglish()}
          />
        </S.Block>
        {Object.keys(query).length !== 0 && (
          <FilterButton
            name={discard}
            onClick={() => {
              router.push(pathname);
              dispatch({ type: 'CLEAR_ALL_FILTERS' });
            }}
          />
        )}
      </S.Filter>
      {initialWidth > 768 && (
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
      <S.Container>
        <S.Grid>
          {initialWidth > 768 ? (
            renderAside()
          ) : (
            <S.FilterWrapper
              active={!hidden}
              withExtraSpace={!!internship_state}
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
          )}

          <S.Article>
            <S.Title>{mock.mainTitle}</S.Title>
            <Search
              placeholder={mock.search}
              handleSearch={search => handleSearch(search)}
              initialValue={router.query.search}
              smallPadding
            />
            <Tags
              handleChangeFilter={el => handleClearTags(el)}
              handleChangeCategory={handleClearCategoryTag}
            />
            {internship_state && (
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
          {initialWidth <= 768 && (
            <S.Resume>
              <S.ResumeButton onClick={handleSendRequestClick}>
                {mock.article.linkText}
              </S.ResumeButton>
              {mock.article.plainText}
            </S.Resume>
          )}
          <S.CardsWrapper>
            <Cards data={back} type="vacancies" />
          </S.CardsWrapper>
        </S.Grid>
      </S.Container>
      {isModalOpened && (
        <FormModal modalIsOpen={isModalOpened} closeModal={closeModal}>
          <JobForm
            data={formMock.jobFormV2}
            closeModal={closeModal}
            showSuccess={() => {}}
          />
        </FormModal>
      )}
    </S.Main>
  );
};

export default VacanciesList;
