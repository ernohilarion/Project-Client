import { Button } from 'react-bootstrap'
import axios from 'axios'

const apiURL = import.meta.env.VITE_API_URL

function LikeButton({ trackId, actions, loadActionsLike }) {

    const doesLikeAction = actions.find(elm => elm.trackId)

    const toggleTrackLike = () => {

        if (doesLikeAction) {
            axios
                .put(`${apiURL}/actions/${doesLikeAction.id}`, { trackId, like: !doesLikeAction.like })
                .then(() => loadActionsLike())
                .catch(err => console.log(err))
        } else {
            axios
                .post(`${apiURL}/actions`, { trackId, like: true })
                .then(() => loadActionsLike())
                .catch(err => console.log(err))
        }
    }

    return (
        <Button
            variant={doesLikeAction && doesLikeAction.like ? 'danger' : 'success'}
            onClick={toggleTrackLike}
        >
            {doesLikeAction && doesLikeAction.like ? '💔' : '❤️'}
        </Button>
    )
}

export default LikeButton
