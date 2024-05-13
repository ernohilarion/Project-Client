import './TrackDetailsPage.css'
import { Container, Button, Card, Row, Col, Form } from "react-bootstrap"
import { useState, useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import axios from "axios"

const apiURL = "http://localhost:5005"

function TrackDetailsPage() {

    const [track, setTrack] = useState({})
    const [comments, setComments] = useState([])

    const { trackId } = useParams()

    const navigate = useNavigate()

    const [comment, setComment] = useState({
        id: "",
        trackId: "",
        like: false,
        rating: 0,
        comment: ""
    })

    useEffect(() => {
        loadTrackDetails()
        loadComments()
    }, [trackId])

    const loadTrackDetails = () => {
        axios.get(`${apiURL}/tracks/${trackId}`)
            .then(({ data }) => setTrack(data))
            .catch(error => console.error(error))
    }

    const loadComments = () => {
        axios.get(`${apiURL}/actions/?trackId=${trackId}`)
            .then(({ data }) => setComments(data))
            .catch(error => console.error(error))
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setComment(prevState => ({ ...prevState, [name]: value }))
    }

    const handleTrackFormSubmit = e => {
        e.preventDefault()
        const newAction = {
            trackId: parseInt(trackId),
            like: comment.like,
            rating: parseInt(comment.rating),
            comment: comment.comment
        }

        axios.post(`${apiURL}/actions`, newAction)
            .then(({ data }) => {
                setComments([...comments, data])
                setComment({ id: "", trackId: "", like: false, rating: 0, comment: "" })
            })
            .catch(error => console.error(error))
    }

    const deleteComment = (commentId) => {
        axios.delete(`${apiURL}/actions/${commentId}`)
            .then(() => {
                const updatedComments = comments.filter(comment => comment.id !== commentId)
                setComments(updatedComments)
            })
            .catch(error => console.error(error))
    }

    const deleteTrack = () => {
        alert('elimina aqui')
    }

    return (
        <div className="TrackDetailsPage">
            <Container>
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
            <p>{track.description}</p>
            <Link to="/all-tracks">
                <Button variant="secondary">Back to All the tracks</Button>
            </Link>
            <Link to={`/edit-tracks/${trackId}`}>
                <Button variant="primary">Edit <em>{track.title}</em></Button>
            </Link>
            <Button variant="danger" onClick={deleteTrack}>Eliminar <em>{track.title}</em></Button>

            <Form onSubmit={handleTrackFormSubmit}>
                <Form.Group className="mb-3" controlId="formComment">
                    <Form.Label>Comments</Form.Label>
                    <Form.Control
                        type="text"
                        name="comment"
                        value={comment.comment}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Rating</Form.Label>
                    <Form.Range
                        name="rating"
                        value={comment.rating}
                        onChange={handleInputChange}
                        min="1"
                        max="5"
                    />
                    <Form.Text>Current Rating: {comment.rating}</Form.Text>
                </Form.Group>

                <Button variant="primary" type="submit">Add Comment</Button>
            </Form>

            <div>
                <h3>Comments</h3>
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
        </div>
    )
}

export default TrackDetailsPage
