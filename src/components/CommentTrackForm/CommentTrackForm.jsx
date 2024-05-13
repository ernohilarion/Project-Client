import { Container, Button, Card, Row, Col, Form } from "react-bootstrap"
import { useState, useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import axios from "axios"
const apiURL = "http://localhost:5005"


function CommentTrackForm() {

    const [comment, setComment] = useState({
        id: "",
        trackId: "",
        like: false,
        rating: 0,
        comment: ""
    })


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

        axios
            .post(`${apiURL}/actions`, newAction)
            .then(({ data }) => {
                setComment({ id: "", trackId: "", like: false, rating: 0, comment: "" })
            })
            .catch(error => console.error(error))
    }

    return (
        <div className="CommentTrackForm">

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

        </div>
    )
}

export default CommentTrackForm