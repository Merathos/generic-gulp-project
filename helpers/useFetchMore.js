import { useState, useEffect } from 'react';

const useFetchMore = ({
  data,
  fetchMore,
  offset,
  limit = 10,
  isEnd,
  merge,
  resetNext,
}) => {
  const [fetchingMore, setFetchingMore] = useState(false);
  const [hasNext, setHasNext] = useState(true);

  function onScroll() {
    const { documentElement } = document;
    const { clientHeight, scrollHeight } = documentElement;
    const scrollTop = window.scrollY;

    if (
      scrollTop + clientHeight >= scrollHeight - 400 &&
      clientHeight > 0 &&
      scrollTop > 0
    ) {
      setFetchingMore(true);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [data]);

  useEffect(() => {
    setHasNext(true);
    setFetchingMore(false);
  }, [resetNext]);
  useEffect(() => {
    if (fetchingMore && hasNext && data) {
      fetchMore({
        variables: {
          limit,
          offset,
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          setFetchingMore(false);
          if (!fetchMoreResult) {
            return previousResult;
          }
          if (isEnd(fetchMoreResult)) {
            setHasNext(false);
            return previousResult;
          }

          return merge(previousResult, fetchMoreResult);
        },
      });
    }
  }, [fetchingMore, hasNext]);
};

export default useFetchMore;
