import { Layout, CustomHead, Page404 } from 'containers';

const TITLE = 'Ошибка 404';
const DESCRIPTION =
  'Возможно, вы ввели неправильный адрес, или страница была удалена.';

const p404 = ({ routerIndex }) => {
  return (
    <>
      <CustomHead title={TITLE} description={DESCRIPTION} />
      <Layout
        backButton={routerIndex > 1}
        from404
        plainHeader
        greyHeader={false}
      >
        <Page404 />
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default p404;
