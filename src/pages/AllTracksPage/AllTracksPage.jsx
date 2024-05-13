import './AllTracksPage.css'
import { Container } from "react-bootstrap"
import TracksList from '../../components/TracksList/TrackList'

const apiURL = 'http://localhost:5005'

import { useState, useEffect } from 'react'
import axios from 'axios'

function AllTracksPage() {

    const [allTracks, setTracks] = useState([])

    useEffect(() => {
        fetchTracksAndLikes()
    }, [])

    const fetchTracksAndLikes = async () => {

        try {
            const { data: tracksData } = await axios.get(`${apiURL}/tracks`)
            const { data: likesData } = await axios.get(`${apiURL}/actions`)

            const likesMap = likesData.reduce((map, like) => {
                map[like.trackId] = like.like ? true : map[like.trackId] || false
                return map
            }, {})

            const tracksWithLikes = tracksData.map(track => ({
                ...track,
                liked: !!likesMap[track.id]
            }))
            setTracks(tracksWithLikes)

        } catch (error) {
            console.error(error)
        }
    }


    return (
        <Container className='AllTracksPage'>
            <marquee behavior="scroll" direction="left" className="marquee">
                ALL-TRACKS /ALL-TRACKS /ALL-TRACKS
            </marquee>
            <TracksList tracks={allTracks} />
        </Container>
    )
}

export default AllTracksPage