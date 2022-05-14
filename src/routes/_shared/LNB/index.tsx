import cx from 'classnames'
import styles from './lnb.module.scss'
import { NavLink } from 'react-router-dom'

const LNB = () => {
  return (
    <nav className={styles.lnb}>
      <ul>
        <li>
          <NavLink to='search' className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
            검색
          </NavLink>
        </li>
        <li>
          <NavLink to='bookmark' className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
            즐겨찾기
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default LNB
