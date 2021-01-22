import {
  RelocationHeader,
  Benefits,
  RelocationApply,
  RelocationBlogs,
  OfficesMap,
  RelocationFooter,
} from 'components';
import greyFooterMock from 'mock/greyFooter';

const Relocation = ({ data, blogs }) => {
  return (
    <main>
      <RelocationHeader data={data.intro} />
      <Benefits data={data.advantages} />
      <RelocationApply data={data.promo} />
      {blogs?.length > 0 && <RelocationBlogs data={data.blogs} blogs={blogs} />}
      <OfficesMap data={data.map} />
      <RelocationFooter data={greyFooterMock.greyFooter} />
    </main>
  );
};

export default Relocation;
