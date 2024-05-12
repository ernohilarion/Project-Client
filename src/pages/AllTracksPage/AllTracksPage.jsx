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
        getAllTracks();
    }, []);

    const getAllTracks = () => {
        axios
            .get(apiURL)
            .then(response => {
                setTracks(response.data);
            })
            .catch((error) => console.log(error));
    };

    const handleLike = (trackId) => {
        const likeData = {
            trackId: trackId,
            like: true
        };
        axios.post(apiURLactions, likeData)
            .then(response => {
                alert('Track liked!🤍')
            })
            .catch(error => console.error(error));
    };

    return (
        <Container className='AllTracksPage'>
            <h1>All the tracks</h1>
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
                            <Button className="pink-btn rounded-circle" onClick={() => handleLike(track.id)}>🤍</Button>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default AllTracksPage;
