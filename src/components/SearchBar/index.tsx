import styles from './searchBar.module.scss'

const SearchBar = () => {
  return (
    <div className={styles.searchBarWrap}>
      <input type='text' />
      <button type='button' className={styles.searchBtn}>
        돋보기
      </button>
    </div>
  )
}

export default SearchBar
