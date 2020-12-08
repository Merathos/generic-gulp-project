import { Layout, RelocationV2 } from 'containers';
import mock from 'mock/index';

const Relocation = () => {
  return (
    <Layout greyFooter plainHeader isVisible={false}>
      <RelocationV2 data={mock.relocation} />
    </Layout>
  );
};

export default Relocation;
