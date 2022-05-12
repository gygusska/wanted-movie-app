import { Outlet } from 'react-router-dom'
import styles from './layout.module.scss'
import LNB from '../../_shared/LNB'
import Header from '../../_shared/Header'

const Layout = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <Header />
        <Outlet />
        <LNB />
      </div>
    </div>
  )
}

export default Layout
