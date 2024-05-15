import { Container, Row, Col, Button, Image, ListGroup, ButtonGroup } from "react-bootstrap"
import CommentTrackForm from '../../components/CommentTrackForm/CommentTrackForm'
import CommentsList from './../../components/CommentsList/CommentsList'
import LikeButton from './../../components/LikeButton/LikeButton'
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

const apiURL = import.meta.env.VITE_API_URL

function TrackDetailsPage() {

    const [track, setTrack] = useState({})
    const [comments, setComments] = useState([])
    const [actions, setActions] = useState([])
    const { trackId } = useParams()

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
    //Test Traer las acciones de las canciones
    const loadActionsLike = () => {
        axios.get(`${apiURL}/actions/?trackId=${trackId}`)
            .then(({ data }) => setActions(data))
            .catch(error => console.error(error))
    }

    const convertSecondsToMinutes = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    return (
        <div className="TrackDetailsPage">

            <Container>

                <h1 className="mb-5">{track.artist} - {track.title}</h1>

                <Row className="mt-5 mb-5">
                    <Col md={{ span: 3, offset: 2 }}>
                        <Image src={track.cover} />
                    </Col>

                    <Col md={{ span: 4, offset: 1 }}>
                        <h3>Track Details</h3>
                        <hr />
                        <ListGroup>
                            <ListGroup.Item><h4><span>{track.title}</span></h4></ListGroup.Item>
                            <ListGroup.Item><h5> {track.artist}</h5></ListGroup.Item>
                            <ListGroup.Item><h5> {track.album} Album </h5></ListGroup.Item>
                            <ListGroup.Item><h6>{track.year}</h6></ListGroup.Item>
                            <ListGroup.Item><h6>{convertSecondsToMinutes(track.length)} mins</h6></ListGroup.Item>
                            <ListGroup.Item><h6>{track.genres}</h6></ListGroup.Item>
                        </ListGroup>

                        <div className="TrackCardButtonBlock mt-5 pt-5">

                            {/* <ButtonGroup aria-label="Basic example">
                                <Button variant="secondary">Back to All the tracks</Button>
                                <Button variant="secondary">Edit <em>{track.title}</em></Button>
                                <Button variant="secondary" onClick={deleteTrack}>Eliminar</Button>
                            </ButtonGroup> */}
                            <LikeButton trackId={trackId} actions={actions} loadActionsLike={loadActionsLike} />


                            <Link to="/all-tracks">
                                <Button variant="secondary">Back to All the tracks</Button>
                            </Link>

                            <Link to={`/edit-tracks/${trackId}`}>
                                <Button variant="primary">Edit <em>{track.title}</em></Button>
                            </Link>

                            <Link to="/all-tracks">
                                <Button variant="danger" onClick={deleteTrack}>Eliminar <em>{track.title}</em></Button>
                            </Link>

                        </div>

                    </Col>

                </Row>

                <hr />

                <div className="TrackCardCommentBlock">
                    <CommentTrackForm trackId={track.id} loadComments={loadComments} />
                </div>

                <div className="TrackCardCommentBlock">
                    <CommentsList comments={comments} loadComments={loadComments} />
                </div>

            </Container >
        </div >
    )
}

export default TrackDetailsPage