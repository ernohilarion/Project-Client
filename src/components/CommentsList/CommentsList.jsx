import { Button } from "react-bootstrap";

function CommentList({ comments }) {

    return (
        <div className="CommentList">
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
    );
}

export default CommentList
