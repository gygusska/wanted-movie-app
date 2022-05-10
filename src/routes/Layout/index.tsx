import { Outlet } from 'react-router-dom'
import styles from './layout.module.scss'

const Layout = () => {
  return (
    <section className={styles.container}>
      <Outlet />
    </section>
  )
}

export default Layout
