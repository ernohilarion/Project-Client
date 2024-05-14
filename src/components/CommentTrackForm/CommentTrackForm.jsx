import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";

const apiURL = "http://localhost:5005";

function CommentTrackForm({ trackId, loadComments }) {

    const [comment, setComment] = useState({
        like: false,
        rating: 0,
        comment: ""
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setComment(prevState => ({ ...prevState, [name]: value }));
    }

    const handleCommentFormSubmit = e => {

        e.preventDefault()

        const commentContent = { ...comment, trackId: trackId }

        axios
            .post(`${apiURL}/actions`, commentContent)
            .then(() => {
                setComment({ ...comment, rating: 0, comment: "" })
                loadComments()
            })
            .catch(error => console.error(error));
    }

    return (
        <div className="CommentTrackForm">
            <Form onSubmit={handleCommentFormSubmit}>
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
                    <Form.Label>Editing Priority</Form.Label>
                    <Form.Range
                        name="rating"
                        value={comment.rating}
                        onChange={handleInputChange}
                        min="1"
                        max="5"
                    />
                    <Form.Text>Editing Priority with Production: {comment.rating}</Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">Add Comment</Button>
            </Form>
        </div>
    );
}

export default CommentTrackForm;
