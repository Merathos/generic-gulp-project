import { Header, Footer } from 'containers'

import mock from 'mock/index';

const Layout = ({parentSelector, children}) => {
  return (
    <div>
      <Header links={mock.header} />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
