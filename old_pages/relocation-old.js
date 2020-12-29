import { useMemo } from 'react';
import { useQuery } from '@apollo/client';
import withApollo from 'lib/withApollo';
import { getDataFromTree } from '@apollo/react-ssr';
import { Layout, Relocation } from 'containers';
import mock from 'mock/index';
import { GET_RELOCATION_BLOGS } from 'graphql/query';

const relocationPage = () => {
  const blogsData = useQuery(GET_RELOCATION_BLOGS);

  const blogs = useMemo(
    () => (!blogsData.loading ? blogsData.data.blogs : null),
    [blogsData.data]
  );

  if (!blogs) return null;
  return (
    <Layout greyFooter isVisible={false}>
      <Relocation data={mock.relocation} blogs={blogs} />
    </Layout>
  );
};

export default withApollo(relocationPage, { getDataFromTree });
