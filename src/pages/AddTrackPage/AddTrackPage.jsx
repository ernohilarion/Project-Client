import { Link } from "react-router-dom"
import './AddTrackPage.css'
import { Container, Button, Form, Row, Col } from "react-bootstrap"
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const apiURL = 'http://localhost:5005/tracks'





function AddTrackPage() {

    const navigate = useNavigate()

    const [trackData, setTrackData] = useState({
        title: " ",
        artist: " ",
        album: " ",
        year: 0,
        length: 0,
        cover: " ",
        genres: [" , "],
        explicit: " ",
    })

    const handleInputChange = event => {
        const { name, value } = event.target
        setTrackData({ ...trackData, [name]: value })
    }

    const handleTrackFormSubmit = e => {

        e.preventDefault()

        axios
            .post(`${apiURL}`, trackData)
            .then(() => navigate('/all-tracks'))
            .catch(err => console.log(err))
    }







    return (
        <div className='AddTrackPage mt-5'>
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>

                        <Form onSubmit={handleTrackFormSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label>Song Name</Form.Label>
                                <Form.Control
                                    controlId="title"
                                    type="text"
                                    name="title"
                                    value={trackData.title}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>

                            <Form.Group
                                className="mb-3"
                                controlId="artist"
                                value={trackData.artist}
                                onChange={handleInputChange}>
                                <Form.Control type="text" />
                                <Form.Label>Artist</Form.Label>
                            </Form.Group>

                            <Form.Group
                                className="mb-3"
                                controlId="album"
                                value={trackData.album}
                                onChange={handleInputChange}>
                                <Form.Control type="text" />
                                <Form.Label>Album</Form.Label>
                            </Form.Group>

                            <Form.Group
                                className="mb-3"
                                controlId="year"
                                value={trackData.year}
                                onChange={handleInputChange}>
                                <Form.Control type="number" />
                                <Form.Label>Year</Form.Label>
                            </Form.Group>

                            <Form.Group
                                className="mb-3"
                                controlId="length"
                                value={trackData.length}
                                onChange={handleInputChange}>
                                <Form.Control type="number" />
                                <Form.Label>Length</Form.Label>
                            </Form.Group>

                            <Form.Group
                                className="mb-3"
                                controlId="imageCover"
                                value={trackData.cover}
                                onChange={handleInputChange}>
                                <Form.Control type="url" />
                                <Form.Label>Cover Image</Form.Label>
                            </Form.Group>

                            <Form.Group
                                className="mb-3"
                                controlId="genres"
                                value={trackData.genres}
                                onChange={handleInputChange}>
                                <Form.Control type="text" />
                                <Form.Label>Genres</Form.Label>
                            </Form.Group>


                            <Form.Group
                                className="mb-3"
                                value={trackData.explicit}
                                onChange={handleInputChange}>
                                <Form.Select id="disabledSelect" >
                                    <option>  </option>
                                    <option>Yes</option>
                                    <option>No</option>
                                </Form.Select>
                                <Form.Label htmlFor="disabledSelect">Explicit</Form.Label>
                            </Form.Group>


                            <Button variant="primary" type="submit">
                                Add Track
                            </Button>
                        </Form>


                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default AddTrackPage