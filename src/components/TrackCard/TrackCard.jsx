import { Link } from "react-router-dom"
import './TrackCard.css'

const TrackCard = ({ id, title, artist, cover }) => {
    return (
        <div className='TrackCard'>
            <Link to={`/details-track/${id}`}>
                <img src={cover} alt={title} />
                <div>
                    <h4>{title}</h4>
                    <h4>{artist}</h4>
                </div>
            </Link>
        </div>
    )
}

export default TrackCard
