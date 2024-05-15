import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container } from 'react-bootstrap'
import TracksList from '../../components/TracksList/TrackList'
import './LikedTracksPage.css'

const apiURL = import.meta.env.VITE_API_URL

function LikedTracksPage() {
    const [likedTracks, setLikedTracks] = useState([])

    useEffect(() => {
        fetchLikedTracks()
    }, [])

    const fetchLikedTracks = async () => {
        try {
            const { data: actionsData } = await axios.get(`${apiURL}/actions`)
            const likedActions = actionsData.filter(action => action.like)
            const { data: tracksData } = await axios.get(`${apiURL}/tracks`)

            const likedTracks = tracksData.filter(track =>
                likedActions.some(action => action.trackId == track.id)
            )

            setLikedTracks(likedTracks)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <Container className='LikedTracksPage'>
            <marquee behavior="scroll" direction="left" className="marquee">
                LIKED-TRACKS /LIKED-TRACKS /LIKED-TRACKS
            </marquee>
            <TracksList tracks={likedTracks} />
        </Container>
    )
}

export default LikedTracksPage
