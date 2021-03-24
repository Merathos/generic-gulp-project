import { Layout, CustomHead, Contacts } from 'containers';
import mock from 'mock/contacts';

const TITLE = 'Контакты DINS';
const DESCRIPTION =
  'IT-компания из Петербурга. Два офиса в шаговой доступности от метро. Отправить резюме.';

const contactsPage = () => {
  return (
    <>
      <CustomHead title={TITLE} description={DESCRIPTION} />
      <Layout nimax plainHeader>
        <Contacts data={mock.contacts} />
      </Layout>
    </>
  );
};

export default contactsPage;
