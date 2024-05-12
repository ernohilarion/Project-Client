import './LikedTracksPage.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';

const apiURL = 'http://localhost:5005/tracks';
const apiURLactions = 'http://localhost:5005/actions';

function LikedTracksPage() {
    const [likedTracks, setLikedTracks] = useState([]);

    useEffect(() => {
        fetchLikedTracks();
    }, []);

    const fetchLikedTracks = async () => {
        try {
            const actionsResponse = await axios.get(apiURLactions);
            const likedActions = actionsResponse.data.filter(action => action.like === true);

            const tracksResponse = await axios.get(apiURL);
            const filteredTracks = tracksResponse.data.filter(track =>
                likedActions.some(action => action.trackId === track.id)
            );

            const tracksWithActionId = filteredTracks.map(track => ({
                ...track,
                actionId: likedActions.find(action => action.trackId === track.id).id
            }));

            setLikedTracks(tracksWithActionId);
        } catch (error) {
            console.error(error);
        }
    };

    const handleUnlike = async (trackId) => {
        const actionId = likedTracks.find(track => track.id === trackId).actionId;
        axios.delete(`${apiURLactions}/${actionId}`)
            .then(() => {
                const updatedTracks = likedTracks.filter(track => track.id !== trackId);
                setLikedTracks(updatedTracks);
                alert('Like removed');
            })
            .catch(error => console.error(error));
    };

    return (
        <Container className='AllTracksPage'>
            <h1>Liked Tracks</h1>
            <Row>
                {likedTracks.map(track => (
                    <Col md={4} key={track.id} className='mb-3'>
                        <div className='TrackCard'>
                            <Link to={`/details-track/${track.id}`}>
                                <img src={track.cover} alt={track.title} />
                                <div>
                                    <h3>{track.title}</h3>
                                    <h4>{track.artist}</h4>
                                    <p>{track.album}</p>
                                </div>
                            </Link>
                            <button className="blue-btn rounded-circle" onClick={() => handleUnlike(track.id)}>♥</button>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default LikedTracksPage;
