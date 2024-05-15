import { Container, Row, Col, Button, Image, ListGroup, ButtonGroup } from 'react-bootstrap'
import CommentTrackForm from '../../components/CommentTrackForm/CommentTrackForm'
import CommentsList from './../../components/CommentsList/CommentsList'
import LikeButton from './../../components/LikeButton/LikeButton'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import './TrackDetailsPage.css'

const apiURL = import.meta.env.VITE_API_URL

function TrackDetailsPage() {
    const [track, setTrack] = useState({})
    const [comments, setComments] = useState([])
    const [actions, setActions] = useState([])
    const { trackId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        loadTrackDetails()
        loadComments()
        loadActionsLike()
    }, [trackId])

    const loadTrackDetails = () => {
        axios
            .get(`${apiURL}/tracks/${trackId}`)
            .then(({ data }) => setTrack(data))
            .catch(error => console.error(error))
    }

    const loadComments = () => {
        axios
            .get(`${apiURL}/actions/?trackId=${trackId}`)
            .then(({ data }) => setComments(data))
            .catch(error => console.error(error))
    }

    const deleteTrack = () => {
        axios
            .delete(`${apiURL}/tracks/${trackId}`)
            .then(() => navigate('/all-tracks'))
            .catch(error => console.error(error))
    }

    const loadActionsLike = () => {
        axios.get(`${apiURL}/actions/?trackId=${trackId}`)
            .then(({ data }) => setActions(data))
            .catch(error => console.error(error))
    }

    const convertSecondsToMinutes = (seconds) => {
        const minutes = Math.floor(seconds / 60)
        const remainingSeconds = seconds % 60
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`
    }

    return (
        <div className="TrackDetailsPage">
            <Container>
                <h1>{track.title} - {track.artist}</h1>
                <Row className="align-items-center">
                    <Col md={4} className="img-col">
                        <Image src={track.cover} alt={track.title} />
                        <div className="buttons-container">
                            <LikeButton trackId={trackId} actions={actions} loadActionsLike={loadActionsLike} />
                            <Link to="/all-tracks" className="btn btn-secondary">
                                Back to All
                            </Link>
                            <Link to={`/edit-tracks/${trackId}`} className="btn btn-primary">
                                Edit
                            </Link>
                            <Button variant="danger" onClick={deleteTrack}>Delete</Button>
                        </div>
                    </Col>
                    <Col md={6} className="details-col">
                        <ListGroup variant="flush">
                            <ListGroup.Item><h4>{track.title}</h4></ListGroup.Item>
                            <ListGroup.Item><h5>{track.artist}</h5></ListGroup.Item>
                            <ListGroup.Item><h5>{track.album} Album</h5></ListGroup.Item>
                            <ListGroup.Item><h6>{track.year}</h6></ListGroup.Item>
                            <ListGroup.Item><h6>{convertSecondsToMinutes(track.length)} mins</h6></ListGroup.Item>
                            <ListGroup.Item><h6>{track.genres?.join(', ')}</h6></ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
                <div className="comments-section">
                    <CommentTrackForm trackId={track.id} loadComments={loadComments} />
                    <CommentsList comments={comments} loadComments={loadComments} />
                </div>
            </Container>
        </div>
    )
}

export default TrackDetailsPage
