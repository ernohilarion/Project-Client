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
            <Container>
                <Row>
                    <Col md={{ span: 6 }}>

                        <br />
                        <h1>All the tracks</h1>
                        <br />

                        {
                            tracks.map((track) => {
                                return (
                                    <div key={track.id}>
                                        <Link to={`/details-tracks/${track.id}`} key={track.id}>
                                            <div className='TrackCard card' >
                                                <h3>{track.title}</h3>
                                                <h4>{track.artist}</h4>
                                                <h6>{track.album}</h6>
                                                <img src={track.cover} alt={track.title}></img>
                                            </div></Link>
                                    </div>
                                )
                            })}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AllTracksPage
