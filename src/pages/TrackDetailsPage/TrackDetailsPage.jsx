import { Container, Row, Col, Button } from "react-bootstrap"
import CommentTrackForm from '../../components/CommentTrackForm/CommentTrackForm'

import TrackCard from '../../components/TrackCard/TrackCard'
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

const apiURL = "http://localhost:5005"

function TrackDetailsPage() {

    const [track, setTrack] = useState({})
    const [comments, setComments] = useState([])

    const { trackId } = useParams()

    useEffect(() => {
        loadTrackDetails()
        loadComments()
    }, [trackId])

    const loadTrackDetails = () => {
        axios.get(`${apiURL}/tracks/${trackId}`)
            .then(({ data }) => setTrack(data))
            .catch(error => console.error(error))
    }

    const deleteTrack = () => {
        axios
            .delete(`${apiURL}/tracks/${trackId}`)
            .then(() => navigate('/all-tracks'))
            .catch(error => console.error(error))
    }


    const loadComments = () => {
        axios.get(`${apiURL}/actions/?trackId=${trackId}`)
            .then(({ data }) => setComments(data))
            .catch(error => console.error(error))
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
        <div className="TrackDetailsPage">
            <Container>

                {/* <Container>
                    <Row>
                        <Col md={{ span: 6 }}>
                            <Card>
                                <Card.Img variant="top" src={track.cover || ''} />
                                <Card.Body>
                                    <Card.Title>{track.title}</Card.Title>
                                    <Card.Text>{track.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <h1>{track.title}</h1>
                <p>{track.description}</p> */}


                <Link to="/all-tracks">
                    <Button variant="secondary">Back to All the tracks</Button>
                </Link>
                <Link to={`/edit-tracks/${trackId}`}>
                    <Button variant="primary">Edit <em>{track.title}</em></Button>
                </Link>
                <Button variant="danger" onClick={deleteTrack}>Eliminar <em>{track.title}</em></Button>

                <div>
                    <h3>Comments</h3>
                    <Row>
                        <Col md={{ span: 6, offset: 3 }}>
                            <TrackCard {...track} handleLike={handleLike} />
                            <CommentTrackForm />



                        </Col>
                    </Row>


                    <ul>
                        {
                            comments.map((comment) => (
                                <li key={comment.id}>
                                    {comment.comment}
                                    <Button variant="danger" size="sm" onClick={() => deleteComment(comment.id)}>Delete</Button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </Container>
        </div>
    )
}
export default TrackDetailsPage
















