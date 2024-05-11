import './TrackDetailsPage.css'
import SOKOBAN from '../../assets/SOKOBAN.png'
import { Container, Button, Card, Row, Col } from "react-bootstrap"
import { useState, useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import axios from "axios"
//details-track
const apiURL = "http://localhost:5005/"

function TrackDetailsPage() {
    const [track, setTrack] = useState({})
    const { trackId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const loadTrackDetails = () => {
            axios
                .get(`${apiURL}`)
                .then(({ data }) => { setTrack(data) })
                .catch((error) => { console.log(error) })
        }

        loadTrackDetails()
    }, [trackId])

    const deleteTrack = () => {
        axios
            .delete(`${apiURL}/${trackId}`)
            .then(() => navigate('/all-tracks'))
            .catch((error) => console.log(error))
    }

    return (
        <div className="TrackDetailsPage">
            <Container>
                <Row>
                    <Col md={{ span: 6 }}>
                        <Card>
                            <Card.Img variant="top" src={track.cover} />
                            <Card.Body>
                                <Card.Title>{track.title}</Card.Title>
                                <Card.Text>{track.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <h1>{track.title}</h1>
            <p>{track.description}</p>
            <Link to="/all-tracks">
                <Button variant="secondary">Back to All the tracks</Button>
            </Link>
            <Link to={`/edit-tracks/${trackId}`}>
                <Button variant="primary">Edit <em>{track.title}</em></Button>
            </Link>
            <Button variant="danger" onClick={deleteTrack}>Eliminar <em>{track.title}</em></Button>
        </div>
    )
}

export default TrackDetailsPage
