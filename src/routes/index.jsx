import { Routes, Route } from 'react-router-dom'
import SearchList from './SearchList'
import BookmarkList from './BookmarkList'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<SearchList />} />
      <Route path='search' element={<SearchList />}>
        <Route path=':movie' element={<SearchList />} />
      </Route>
      <Route path='bookmark' element={<BookmarkList />} />
    </Routes>
  )
}

export default App
