import store from 'storejs'
import styles from './movieModal.module.scss'
import { useRecoilState } from 'recoil'
import { bookmarkList } from 'states/movie'
import { ISearch } from 'types/search'

interface Props {
  searchItem: ISearch
  setIsModal: () => void
  isBookmarked: Boolean
}

const MovieModal = ({ searchItem, setIsModal, isBookmarked }: Props) => {
  const [bookmarkedList, setBookmarkedList] = useRecoilState(bookmarkList)

  // bookmarkedList.find((item) => item.imdbID === imdbID);

  const setBookmark = () => {
    // 추가  삭제
    isBookmarked
      ? store.set(
          'bookmarkList',
          bookmarkedList.filter((prev) => prev.imdbID !== searchItem?.imdbID)
        )
      : store.set('bookmarkList', bookmarkedList.concat(searchItem))

    setBookmarkedList(store.get('bookmarkList'))
  }

  const handleClickBookmarkBtn = () => {
    setBookmark()
    setIsModal()
  }

  const handleCloseModal = () => {
    setIsModal()
  }

  return (
    <>
      <div className={styles.modalBlur} onClick={handleCloseModal} role='presentation' />
      <div className={styles.modalWrap}>
        <button type='button' onClick={handleClickBookmarkBtn}>
          {isBookmarked ? '즐겨찾기 삭제' : '즐겨찾기'}
        </button>

        <button type='button' onClick={handleCloseModal}>
          취소
        </button>
      </div>
    </>
  )
}

export default MovieModal
