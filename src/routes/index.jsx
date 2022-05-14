import { Routes, Route } from 'react-router-dom'
import SearchList from './SearchPage'
import BookmarkList from './BookmarkList'
import Layout from './template/Layout'

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<SearchList />} />
        <Route path='search' element={<SearchList />}>
          <Route path=':movie' element={<SearchList />} />
        </Route>
        <Route path='bookmark' element={<BookmarkList />} />
      </Route>
    </Routes>
  )
}

export default App
