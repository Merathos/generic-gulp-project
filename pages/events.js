import { Layout, Events } from 'containers';
import mock from 'mock/index';

const eventsPage = () => {
    return (
        <Layout plainHeader>
            <Events data={mock.events} />
        </Layout>
    );
};

export default eventsPage;
