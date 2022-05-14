// import dayjs from 'dayjs'
import Movie from 'components/Movie'
import SearchBar from 'components/SearchBar'
import { useCallback, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useMount, useUpdateEffect } from 'react-use'
import { useRecoilState, useRecoilValue } from 'recoil'
import LNB from 'routes/_shared/LNB'
import { getMovieApi } from 'services/search'
import { searchMovieList } from 'states/movie'
import styles from './searchList.module.scss'

const SearchPage = () => {
  const [searchParams] = useSearchParams()
  const [search, setSearchList] = useRecoilState(searchMovieList)
  const currentSearch = searchParams.get('s') ?? ''

  const getMovieList = useCallback(() => {
    if (!currentSearch) return
    getMovieApi({ s: currentSearch, page: 1 }).then((res) => {
      setSearchList(res.data.Search)
    })
  }, [currentSearch, setSearchList])

  useMount(() => {
    if (!currentSearch) return
    getMovieList()
  })

  useEffect(() => {
    getMovieList()
  }, [getMovieList])

  return (
    <>
      <header>
        <SearchBar />
      </header>
      <main>
        {search ? (
          <ul>
            {search.map((data, idx) => (
              // eslint-disable-next-line react/no-array-index-key
              <Movie key={`movie-${data.imdbID}-${idx}`} movie={data} />
            ))}
          </ul>
        ) : (
          <h2>검색 결과가 없습니다.</h2>
        )}
      </main>
    </>
  )
}

export default SearchPage
