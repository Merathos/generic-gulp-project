import { Header, Footer } from 'containers'

import mock from 'mock/index';

const Layout = ({ children }) => {
  return (
    <div>
      <Header data={mock.header} />
      {children}
      <Footer data={mock.footer} />
    </div>
  );
};

export default Layout;
