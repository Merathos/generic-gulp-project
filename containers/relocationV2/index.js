import {
  RelocationHeader,
  Benefits,
  RelocationApply,
  RelocationBlogs,
  RelocationOffices,
  RelocationFooter,
} from 'components';

const Relocation = ({ data }) => {
  return (
    <main>
      <RelocationHeader data={data.intro} />
      <Benefits data={data.advantages} />
      <RelocationApply data={data.promo} />
      <RelocationBlogs data={data.blogs} />
      <RelocationOffices data={data.map} />
      <RelocationFooter data={data.greyFooter} />
    </main>
  );
};

export default Relocation;
