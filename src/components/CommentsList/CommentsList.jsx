import { Button } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from 'react'
const apiURL = 'http://localhost:5005'
import { Link, useParams, useNavigate } from "react-router-dom"




function CommentList({ comments, loadComments }) {

    const deleteComment = (commentId) => {

        axios
            .delete(`${apiURL}/actions/${commentId}`)
            .then(() => loadComments())
            .catch(error => console.error(error))
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
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default CommentList
