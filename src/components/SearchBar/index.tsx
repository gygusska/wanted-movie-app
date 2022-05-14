import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useResetRecoilState } from 'recoil'
import { searchMovieList } from 'states/movie'

import styles from './searchBar.module.scss'

const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [title, setTitle] = useState(searchParams.get('s') ?? '')

  const resetMovieList = useResetRecoilState(searchMovieList)

  const handleSubmit = (e?: FormEvent<HTMLFormElement>) => {
    e?.preventDefault()
    if (!title) {
      alert('검색어를 입력해주세요')
      return
    }

    setSearchParams({ s: title })
    // resetMovieList()
  }

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value)
  }

  return (
    <div className={styles.searchBarWrap}>
      <div className={styles.searchBarFixed}>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            className={styles.searchInput}
            onChange={handleTitleChange}
            value={title}
            placeholder='검색'
          />
          <button type='submit' className={styles.searchBtn}>
            돋보기
          </button>
        </form>
      </div>
    </div>
  )
}

export default SearchBar
