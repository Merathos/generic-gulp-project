import { Layout, Events } from 'containers';
import mock from 'mock/index';

const eventsPage = () => {
    return (
        <Layout plainHeader isVisible={false} showFooter={false}>
            <Events data={mock.events} />
        </Layout>
    );
};

export default eventsPage;
