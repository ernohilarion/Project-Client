import { Routes, Route } from 'react-router-dom'

import HomePage from './../pages/HomePage/HomePage'
import AddTrackPage from './../pages/AddTrackPage/AddTrackPage'
import AllTracksPage from './../pages/AllTracksPage/AllTracksPage'
import EditTrackPage from './../pages/EditTrackPage/EditTrackPage'
import LikedTracksPage from './../pages/LikedTracksPage/LikedTracksPage'
import DetailsTracksPage from './../pages/TrackDetailsPage/TrackDetailsPage'
import AboutUsPage from './../pages/AboutUsPage/AboutUsPage'
import ErrorPage from './../pages/ErrorPage/ErrorPage'

const AppRoutes = () => {

    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/add-track' element={<AddTrackPage />} />
            <Route path='/all-tracks' element={<AllTracksPage />} />
            <Route path='/edit-tracks/:trackId' element={<EditTrackPage />} />
            <Route path='/liked-tracks' element={<LikedTracksPage />} />
            <Route path='/details-track/:trackId' element={<DetailsTracksPage />} />
            <Route path='/about-us' element={<AboutUsPage />} />
            <Route path='*' element={<ErrorPage />} />
        </Routes>
    )
}

export default AppRoutes