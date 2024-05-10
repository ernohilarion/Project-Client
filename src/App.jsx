import './App.css'

import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import Footer from './components/Footer/Footer'
import HomePage from './pages/HomePage/HomePage'
import AddTrackPage from './pages/AddTrackPage/AddTrackPage'
import AllTracksPage from './pages/AllTracksPage/AllTracksPage'
import EditTrackPage from './pages/EditTrackPage/EditTrackPage'
import LikedTracksPage from './pages/LikedTracksPage/LikedTracksPage'
import DetailsTracksPage from './pages/TrackDetailsPage/TrackDetailsPage'
import AboutUsPage from './pages/AboutUsPage/AboutUsPage'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className='App'>

      <Navbar />
      <Sidebar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/add-track' element={<AddTrackPage />} />
        <Route path='/all-tracks' element={<AllTracksPage />} />
        <Route path='/edit-track' element={<EditTrackPage />} />
        <Route path='/liked-tracks' element={<LikedTracksPage />} />
        <Route path='/details-track' element={<DetailsTracksPage />} />
        <Route path='/about-us' element={<AboutUsPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>

      <Footer />

    </div>
  )
}


export default App

