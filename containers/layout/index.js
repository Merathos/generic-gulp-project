import cx from 'classnames'
import { Header, Footer } from 'containers'

const Layout = ({parentSelector, children}) => {
  return (
    <div
      className={cx("pagewrapper", {
        [`${parentSelector}`]: parentSelector
      })}
    >
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
