import { Container, Button, Card, Row, Col, Form } from "react-bootstrap"
import { useState, useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import CommentTrackForm from '../../components/CommentTrackForm/CommentTrackForm'

const apiURL = "http://localhost:5005"

function EditTrackForm() {

    const [track, setTrack] = useState({})

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


    return (
        <div className='EditTrackForm mt-5'>

            <Form onSubmit={handleTrackFormSubmit}>

                <Form.Group className="mb-3">
                    <Form.Label>Song Name</Form.Label>
                    <Form.Control
                        controlId="title"
                        type="text"
                        name="title"
                        value={trackData.title}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Artist</Form.Label>
                    <Form.Control
                        controlId="artist"
                        type="text"
                        name="artist"
                        value={trackData.artist}
                        onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Album</Form.Label>
                    <Form.Control
                        controlId="album"
                        type="text"
                        name="album"
                        value={trackData.album}
                        onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Year</Form.Label>
                    <Form.Control
                        controlId="year"
                        type="number"
                        name="year"
                        value={trackData.year}
                        onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Length</Form.Label>
                    <Form.Control
                        controlId="length"
                        type="text"
                        name="length"
                        value={trackData.length}
                        onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Cover Image</Form.Label>
                    <Form.Control
                        controlId="cover"
                        type="text"
                        name="cover"
                        value={trackData.cover}
                        onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Genres</Form.Label>
                    <Form.Control
                        controlId="genres"
                        type="text"
                        name="genres"
                        value={trackData.genres}
                        onChange={handleGeneresChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="disabledSelect">Explicit</Form.Label>
                    <Form.Select
                        id="explicit"
                        type="text"
                        name="explicit"
                        value={trackData.explicit}
                        onChange={handleInputChange}
                    >
                        <option value="">  </option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </Form.Select>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Edit Track
                </Button>


            </Form>

        </div >
    )
}

export default EditTrackForm