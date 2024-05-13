import { useNavigate, useParams } from "react-router-dom"
import { Button, Form } from "react-bootstrap"
import axios from "axios"
import { useEffect, useState } from "react"


const apiURL = 'http://localhost:5005'


function EditTrackForm() {

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

    // const { trackId } = useParams()

    // useEffect(() => {
    //     axios
    //         .get(`${apiURL}${trackId}`)
    //         .then(({ data }) => setTrackData(data))
    //         .catch(err => console.log(err))

    // }, [])

    // const handleInputChange = event => {
    //     const { name, value } = event.target
    //     setTrackData({ ...trackData, [name]: value })
    // }

    // const handleTrackFormSubmit = e => {

    //     e.preventDefault()

    //     axios
    //         .post(`${apiURL}${trackId}`, trackData)
    //         .then(() => navigate('/all-tracks'))
    //         .catch(err => console.log(err))
    // }


    useEffect(() => {
        loadFormData()          // 1.- Primero se rellena el form con los datos a editar
    }, [])

    const { trackId } = useParams()

    const navigate = useNavigate()

    const loadFormData = () => {
        axios
            .get(`${apiURL}/tracks/${trackId}`)
            .then(({ data }) => setTrackData(data))
            .catch(err => console.log(err))
    }

    const handleInputChange = event => {
        const { name, value } = event.target
        setTrackData({ ...trackData, [name]: value })
    }


    const handleTrackFormSubmit = e => {

        e.preventDefault()

        axios
            .put(`${apiURL}/${trackId}`, trackData)
            .then(() => navigate('/all-tracks'))
            .catch(err => console.log(err))
    }

    return (
        <div className='EditTrackForm mt-5'>

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
                        onChange={handleInputChange} />
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

                <Button variant="primary" type="submit">Edit Track</Button>

            </Form>

        </div >
    )
}

export default EditTrackForm