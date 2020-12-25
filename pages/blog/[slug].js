import { useMemo } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { Layout, Story, Article } from 'containers';
import { GET_BLOG_CONTENT } from 'graphql/query';
import withApollo from 'lib/withApollo';
import { getDataFromTree } from '@apollo/react-ssr';

import mock from 'mock/index';

const storyPage = () => {
  const router = useRouter();
  const { query } = router;

  const blogData = useQuery(GET_BLOG_CONTENT, {
    variables: {
      slug: query.slug,
      is_preview: query.preview === 'true',
    },
  });
  const blog = useMemo(
    () => (!blogData.loading ? blogData.data.blogs[0] : null),
    [blogData.data]
  );

  if (!blog) return null;

  return (
    <Layout backButton greyFooter={blog.type === 'history'}>
      {blog.type === 'history' ? (
        <Story back={blog} />
      ) : (
        <Article data={mock.article} back={blog} />
      )}
    </Layout>
  );
};

export default withApollo(storyPage, { getDataFromTree });
