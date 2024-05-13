import './AllTracksPage.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Button, Container, Row, Col } from "react-bootstrap"

const apiURL = 'http://localhost:5005/tracks'
const apiActionsURL = 'http://localhost:5005/actions'

function AllTracksPage() {
    const [tracks, setTracks] = useState([])

    useEffect(() => {
        fetchTracksAndLikes()
    }, [])

    const fetchTracksAndLikes = async () => {

        try {
            const { data: tracksData } = await axios.get(apiURL)
            const { data: likesData } = await axios.get(apiActionsURL)

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

    const handleLike = async (trackId) => {
        try {
            await axios.post(apiActionsURL, { trackId, like: true })
            fetchTracksAndLikes()

        } catch (error) {
            console.error(error)
        }
    }

    return (
        <Container className='AllTracksPage'>
            <marquee behavior="scroll" direction="left" className="marquee">
                ALL-TRACKS /ALL-TRACKS /ALL-TRACKS
            </marquee>
            <Row>
                {tracks.map((track) => (
                    <Col md={3} key={track.id} className='mb-4'>
                        <div className='TrackCard'>
                            <Link to={`/details-track/${track.id}`}>
                                <img src={track.cover} alt={track.title} />
                                <div>
                                    <h3>{track.title}</h3>
                                    <h4>{track.artist}</h4>
                                    <h6>{track.album}</h6>
                                </div>
                            </Link>
                            {!track.liked && (
                                <Button className='blue-btn rounded-circle'
                                    onClick={() => handleLike(track.id)}>♥</Button>
                            )}
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default AllTracksPage
