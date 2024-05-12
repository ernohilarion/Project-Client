import './AllTracksPage.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Container, Row, Col } from "react-bootstrap";

const apiURL = 'http://localhost:5005/tracks';
const apiURLactions = 'http://localhost:5005/actions';

function AllTracksPage() {
    const [tracks, setTracks] = useState([]);

    useEffect(() => {
        fetchTracksAndLikes();
    }, []);

    const fetchTracksAndLikes = async () => {
        try {
            const { data: tracksData } = await axios.get(apiURL);
            const { data: likesData } = await axios.get(apiURLactions);
            const tracksWithLikes = tracksData.map(track => ({
                ...track,
                liked: likesData.some(like => like.trackId === track.id && like.like)
            }));
            setTracks(tracksWithLikes);
        } catch (error) {
            console.error(error);
        }
    };

    const handleLikeToggle = async (trackId, liked) => {
        liked ?
            axios.get(`${apiURLactions}?trackId=${trackId}`).then(response => {
                const likeId = response.data.find(like => like.trackId === trackId).id;
                axios.delete(`${apiURLactions}/${likeId}`).then(() => {
                    alert('Like removed');
                    fetchTracksAndLikes();
                }).catch(error => console.error(error));
            }).catch(error => console.error(error)) :
            axios.post(apiURLactions, { trackId, like: true }).then(() => {
                alert('Track liked! ♥');
                fetchTracksAndLikes();
            }).catch(error => console.error(error));
    };

    return (
        <Container className='AllTracksPage'>
            <marquee behavior="scroll" direction="left" className="marquee">
                ALL-TRACKS /ALL-TRACKS /ALL-TRACKS
            </marquee>
            <Row>
                {tracks.map((track) => (
                    <Col md={3} key={track.id} className='mb-4'>
                        <div className='TrackCard'>
                            <Link to={`/details-track/${track.id}`}>
                                <img src={track.cover} alt={track.title} />
                                <div>
                                    <h3>{track.title}</h3>
                                    <h4>{track.artist}</h4>
                                    <h6>{track.album}</h6>
                                </div>
                            </Link>
                            <Button className={`blue-btn rounded-circle ${track.liked ? '' : 'grey-btn'}`}
                                onClick={() => handleLikeToggle(track.id, track.liked)}>♥</Button>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default AllTracksPage;
