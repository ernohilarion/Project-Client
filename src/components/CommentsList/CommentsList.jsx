import { Button, Modal } from "react-bootstrap";
import axios from "axios";
import { useState } from 'react';

const apiURL = import.meta.env.VITE_API_URL;

function CommentList({ comments, loadComments }) {
    const [editCommentId, setEditCommentId] = useState(null);
    const [editedComment, setEditedComment] = useState('');
    const [showModal, setShowModal] = useState(false);

    const doesCommentAction = comments.find(comment => comment.trackId);

    const handleEditComment = (commentId) => {
        setEditCommentId(commentId);
        const commentToEdit = comments.find(comment => comment.id === commentId);
        setEditedComment(commentToEdit.comment);
        setShowModal(true);
    };

    const saveEditedComment = () => {
        axios.put(`${apiURL}/actions/${editCommentId}`, {

            rating: editCommentId.rating,
            trackId: doesCommentAction.trackId,
            id: doesCommentAction.id,
            comment: editedComment
        })
            .then(() => {
                loadComments();
                setShowModal(false);
            })
            .catch(err => console.log(err));
    };



    const deleteComment = (commentId) => {
        axios.delete(`${apiURL}/actions/${commentId}`)
            .then(() => loadComments())
            .catch(error => console.error(error));
    };
            .catch (error => console.error(error));
};

return (
    <div className="CommentList">
        <h3>Comments</h3>
        <ul>
            {comments.map((comment) => (
                <li key={comment.id}>
                    {comment.comment}
                    <div className="editDeleteButtons">
                        <Button variant="danger" size="sm" onClick={() => deleteComment(comment.id)}>Delete</Button>
                        <Button variant="danger" size="sm" onClick={() => handleEditComment(comment.id)}>Edit</Button>
                    </div>
                </li>
            ))}
        </ul>
        <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Comment</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <textarea value={editedComment} onChange={(e) => setEditedComment(e.target.value)} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
                <Button variant="primary" onClick={saveEditedComment}>Save changes</Button>
            </Modal.Footer>
        </Modal>
    </div>
);
}

export default CommentList;
