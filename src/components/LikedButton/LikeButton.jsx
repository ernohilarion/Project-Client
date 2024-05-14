import { Button } from 'react-bootstrap'
import { useState } from 'react'
import axios from 'axios'

function LikeButton({ trackId, actions }) {

    const doesLikeAction = actions.find(elm => elm.like)

    const addTrackLike = () => {
        axios
            .get(``)
        // alert('aqui hacemos like')
        // // AQUI TENEIS QUE REFRESCAR LOS DATOS DEL TRACK
    }

    const removeTrackLike = () => {
        alert(`aqui quitamos like de la accion ${doesLikeAction.id}`)
        // AQUI TENEIS QUE REFRESCAR LOS DATOS DEL TRACK
    }

    return (
        <Button
            variant={doesLikeAction ? 'danger' : 'success'}
            onClick={doesLikeAction ? removeTrackLike : addTrackLike}
        >
            {doesLikeAction ? 'Unlike' : 'Like'}
        </Button>
    )
}


export default LikeButton