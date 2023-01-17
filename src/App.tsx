import { Link, Route, Routes } from 'react-router-dom'
import './App.scss'
import { Layout } from './components/Layout'
import { HomePage } from './pages/Home'
import { MusicPlayerPage } from './pages/MusicPlayer'

function App() {

  return (

    <div className="App">

      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/music-player' element={<MusicPlayerPage />} />
        </Route>
      </Routes>
      <nav>
        <li>
          <Link to='/'>Home</Link>
        </li>
        
        <li>
          <Link to='/music-player'>Player de música</Link>
        </li>
        
      </nav>
    </div>
  )
}

export default App
