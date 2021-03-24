import {
  RelocationHeader,
  Benefits,
  RelocationApply,
  RelocationBlogs,
  OfficesMap,
  // RelocationFooter,
  GreyFooter,
} from 'components';
import greyFooterMock from 'mock/greyFooter';
import * as S from './styles';

const Relocation = ({ data, blogs }) => {
  return (
    <main>
      <RelocationHeader data={data.intro} />
      <Benefits data={data.advantages} />
      <RelocationApply data={data.promo} />
      {blogs?.length > 0 && <RelocationBlogs data={data.blogs} blogs={blogs} />}
      <OfficesMap data={data.map} />
      {/* <RelocationFooter data={greyFooterMock.greyFooter} /> */}
      <S.GreyContainer>
        <GreyFooter data={greyFooterMock.greyFooter} type="relocation" />
      </S.GreyContainer>
    </main>
  );
};

export default Relocation;
