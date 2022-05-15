import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useResetRecoilState } from 'recoil'
import { searchMovieList } from 'states/movie'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import styles from './searchBar.module.scss'

const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [title, setTitle] = useState(searchParams.get('s') ?? '')

  const handleSubmit = (e?: FormEvent<HTMLFormElement>) => {
    e?.preventDefault()
    if (!title) {
      // eslint-disable-next-line no-alert
      alert('검색어를 입력해주세요')
      return
    }

    setSearchParams({ s: title })
  }

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value)
  }

  return (
    <div className={styles.searchBarWrap}>
      <form onSubmit={handleSubmit} className={styles.searchBarFixed}>
        <input
          type='text'
          className={styles.searchInput}
          onChange={handleTitleChange}
          value={title}
          placeholder='검색'
        />
        <button type='submit' className={styles.searchBtn}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
    </div>
  )
}

export default SearchBar
