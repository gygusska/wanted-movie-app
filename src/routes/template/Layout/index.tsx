import { Outlet } from 'react-router-dom'
import LNB from 'routes/_shared/LNB'
import styles from './layout.module.scss'

const Layout = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <Outlet />
        <LNB />
      </div>
    </div>
  )
}

export default Layout
