import { Link } from "react-router-dom"

const TrackCard = ({ id, title, artist, album, cover, liked, handleLike }) => {

    return (
        <div className='TrackCard'>
            <Link to={`/details-track/${id}`}>
                <img src={cover} alt={title} />
                <div>
                    <h4>{title}</h4>
                    <h6>{artist}</h6>
                </div>
            </Link>
        </div>
    )
}

export default TrackCard