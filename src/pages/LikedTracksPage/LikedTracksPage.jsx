import './LikedTracksPage.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Row, Col } from "react-bootstrap"
import { Link } from 'react-router-dom'

const apiURL = 'http://localhost:5005/tracks'
const apiActionsURL = 'http://localhost:5005/actions'

function LikedTracksPage() {
    const [likedTracks, setLikedTracks] = useState([])

    useEffect(() => {
        fetchLikedTracks()
    }, [])

    const fetchLikedTracks = async () => {

        try {
            const { data: actionsData } = await axios.get(apiActionsURL)

            const likedActionsMap = actionsData.reduce((map, action) => {
                map[action.trackId] = action.like ? action.id : map[action.trackId]
                return map
            }, {})

            const { data: tracksData } = await axios.get(apiURL)

            const likedTracks = tracksData.filter(track => likedActionsMap.hasOwnProperty(track.id))
                .map(track => ({
                    ...track,
                    actionId: likedActionsMap[track.id]
                }))

            setLikedTracks(likedTracks)

        } catch (error) {
            console.error(error)
        }
    }

    const handleUnlike = async (actionId) => {

        try {
            await axios.delete(`${apiActionsURL}/${actionId}`)
            setLikedTracks(prevTracks => prevTracks.filter(track => track.actionId !== actionId))

        } catch (error) {
            console.error(error)
        }
    }

    return (
        <Container className='AllTracksPage'>
            <h1>Liked Tracks</h1>
            <Row>
                {likedTracks.map(track => (
                    <Col md={4} key={track.id} className='mb-3'>
                        <div className='TrackCard'>
                            <Link to={`/details-track/${track.id}`}>
                                <img src={track.cover} alt={track.title} />
                                <div>
                                    <h3>{track.title}</h3>
                                    <h4>{track.artist}</h4>
                                    <p>{track.album}</p>
                                </div>
                            </Link>
                            <button className="blue-btn rounded-circle" onClick={() => handleUnlike(track.actionId)}>♥</button>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default LikedTracksPage
