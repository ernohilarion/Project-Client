import { Button, Form } from "react-bootstrap"
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const apiURL = 'http://localhost:5005'


const AddTracksForm = () => {

    const navigate = useNavigate()

    const [trackData, setTrackData] = useState({
        title: " ",
        artist: " ",
        album: " ",
        year: 0,
        length: 0,
        cover: " ",
        genres: [" "],
        explicit: " ",
    })

    const handleInputChange = event => {
        const { name, value } = event.target
        setTrackData({ ...trackData, [name]: value })
    }

    const handleTrackFormSubmit = e => {

        e.preventDefault()

        axios
            .post(`${apiURL}/tracks`, trackData)
            .then(() => navigate('/all-tracks'))
            .catch(err => console.log(err))
    }

    const handleGeneresChange = e => {
        const { value } = e.target

        console.log('CONVIERTE ESTO', value, 'EN UN ARRAY SEPARADO POR LAS COMAS')

        let genresArray = []    // <= work here

        setTrackData({ ...trackData, genres: genresArray })
    }


    return (

        <div className="AddTracksForm">

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

                <Form.Group className="mb-3">
                    <Form.Label>Artist</Form.Label>
                    <Form.Control
                        controlId="artist"
                        type="text"
                        name="artist"
                        value={trackData.artist}
                        onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Album</Form.Label>
                    <Form.Control
                        controlId="album"
                        type="text"
                        name="album"
                        value={trackData.album}
                        onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Year</Form.Label>
                    <Form.Control
                        controlId="year"
                        type="number"
                        name="year"
                        value={trackData.year}
                        onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Length</Form.Label>
                    <Form.Control
                        controlId="length"
                        type="text"
                        name="length"
                        value={trackData.length}
                        onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Cover Image</Form.Label>
                    <Form.Control
                        controlId="cover"
                        type="text"
                        name="cover"
                        value={trackData.cover}
                        onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Genres</Form.Label>
                    <Form.Control
                        controlId="genres"
                        type="text"
                        name="genres"
                        value={trackData.genres}
                        onChange={handleGeneresChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="disabledSelect">Explicit</Form.Label>
                    <Form.Select
                        id="explicit"
                        type="text"
                        name="explicit"
                        value={trackData.explicit}
                        onChange={handleInputChange}
                    >
                        <option value="">  </option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </Form.Select>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Add Track
                </Button>
            </Form>

        </div>

    )
}

export default AddTracksForm