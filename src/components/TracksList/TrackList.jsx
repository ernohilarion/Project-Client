import './TrackList.css'
import { Col, Row } from "react-bootstrap"
import TrackCard from '../TrackCard/TrackCard'

function TracksList({ tracks }) {

    const handleLike = async (trackId) => {
        try {
            await axios.post(apiActionsURL, { trackId, like: true })
            fetchTracksAndLikes()

        } catch (error) {
            console.error(error)
        }
    }

    return (
        <Row>
            {
                tracks.map((track) => (
                    <Col md={3} key={track.id} className='mb-4'>
                        <TrackCard {...track} handleLike={handleLike} />
                    </Col>
                ))
            }
        </Row>
    )
}

export default TracksList