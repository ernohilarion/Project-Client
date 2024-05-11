import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './LikedTracksPage.css';

const apiURL = 'http://localhost:5005/tracks';
const apiURLactions = 'http://localhost:5005/action'

function LikedTracksPage() {
    const [likedTracks, setLikedTracks] = useState([]);

    useEffect(() => {
        fetchLikedTracks();
    }, []);

    const fetchLikedTracks = async () => {
        try {

            const actionsResponse = await axios.get(apiURLactions);
            // Filtrar para obtener solo acciones de 'like'
            const likedActions = actionsResponse.data.filter(action => action.like);

            // Obtener todos los tracks
            const tracksResponse = await axios.get(apiURL);
            // Filtrar tracks basándose en las acciones de like
            const filteredTracks = tracksResponse.data.filter(track =>
                likedActions.some(action => action.trackId === track.id)
            );

            setLikedTracks(filteredTracks);
        } catch (error) {
            console.error('Error fetching liked tracks:', error);
        }
    };

    return (
        <div className='LikedTracksPage'>
            <h1>Liked Tracks</h1>
            {likedTracks.map(track => (
                <div key={track.id}>
                    <img src={track.cover} alt={track.title} />
                    <h3>{track.title}</h3>
                    <h4>{track.artist}</h4>
                    <p>{track.album}</p>
                </div>
            ))}
        </div>
    );
}

export default LikedTracksPage;
