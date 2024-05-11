import './AllTracksPage.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Container, Button, Form, Row, Col } from "react-bootstrap"

const apiURL = 'http://localhost:5005/tracks'

function AllTracksPage() {
    const [tracks, setTracks] = useState([])

    useEffect(() => {
        getAllTracks()
    }, [])

    const getAllTracks = () => {
        axios
            .get(`${apiURL}/`)
            .then(({ data }) => setTracks(data))
            .catch((error) => console.log(error))
    }

    return (
        <div className='AllTracksPage'>
            <br />
            <h1>All the tracks</h1>
            <br />
            {tracks.map((track) => {
                return (
                    <Link to={`/details-track/${track.id}`} key={track.id}>
                        <div className='TrackCard'>
                            <img src={track.cover} alt={track.title} />
                            <br />
                            <br />
                            <h3>{track.title}</h3>
                            <h4>{track.artist}</h4>
                            <h6>{track.album}</h6>
                            <hr />
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default AllTracksPage
