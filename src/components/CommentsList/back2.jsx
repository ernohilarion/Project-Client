import { Button } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from 'react'
const apiURL = import.meta.env.VITE_API_URL
import { Link, useParams, useNavigate } from "react-router-dom"




function CommentList({ comments, loadComments }) {


    const deleteComment = (commentId) => {

        axios
            .delete(`${apiURL}/actions/${commentId}`)
            .then(() => loadComments())
            .catch(error => console.error(error))
    }

    const editComment = e => {

        e.preventDefault()

        axios
            .put(`${apiURL}/actions/${commentId}`, comments.comment)
            .then(() => loadComments())
            .catch(err => console.log(err))
    }


    return (
        <div className="CommentList">
            <h3>Comments</h3>
            <ul>
                {
                    comments.map((comment) => (
                        <li key={comment.id}>
                            {comment.comment}
                            <div className="deleteComment">
                                <Button variant="danger" size="sm" onClick={() => deleteComment(comment.id)}>Delete</Button>
                            </div>
                            <div className="editComment">
                                <Button variant="danger" size="sm" onClick={() => editComment(comment.id)}>Edit</Button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default CommentList
