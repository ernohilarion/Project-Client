import './LikedTracksPage.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container } from "react-bootstrap"
import TracksList from '../../components/TracksList/TrackList'

const apiURL = import.meta.env.VITE_API_URL

function LikedTracksPage() {
    const [likedTracks, setLikedTracks] = useState([])

    useEffect(() => {
        fetchLikedTracks()
    }, [])

    const fetchLikedTracks = async () => {

        try {
            const { data: actionsData } = await axios.get(`${apiURL}/actions`)

            const likedActionsMapeo = actionsData.reduce((map, action) => {
                map[action.trackId] = action.like ? action.id : map[action.trackId]
                return map
            }, {})

            const { data: tracksData } = await axios.get(`${apiURL}/tracks`)

            const likedTracks = tracksData.filter(track => likedActionsMapeo.hasOwnProperty(track.id)) // Tiene una propiedad, true
                .map(track => ({
                    ...track,
                    actionId: likedActionsMapeo[track.id]
                }))

            setLikedTracks(likedTracks)

        } catch (error) {
            console.error(error)
        }
    }


    return (
        <Container className='AllTracksPage'>
            <marquee behavior="scroll" direction="left" className="marquee">
                LIKED-TRACKS /LIKED-TRACKS /LIKED-TRACKS
            </marquee>
            <TracksList tracks={likedTracks} columnSize={4} />
        </Container>
    )
}

export default LikedTracksPage
