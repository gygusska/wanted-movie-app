import Movie from 'components/Movie'
import React from 'react'
import { useRecoilState } from 'recoil'
import { bookmarkList } from 'states/movie'
import styles from './bookmark.module.scss'

const BookmarkList = () => {
  const [bookmarkedList] = useRecoilState(bookmarkList)

  return (
    <>
      <h2 className={styles.bookmarkTitle}>내 즐겨찾기</h2>

      <main>
        {bookmarkedList ? (
          <ul>
            {bookmarkedList.map((data, idx) => (
              // eslint-disable-next-line react/no-array-index-key
              <Movie key={`movie-${data.imdbID}-${idx}`} movie={data} />
            ))}
          </ul>
        ) : (
          <h2>즐겨찾기가 없습니다.</h2>
        )}
      </main>
    </>
  )
}

export default BookmarkList
