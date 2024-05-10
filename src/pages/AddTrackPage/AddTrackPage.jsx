import { Link } from "react-router-dom"
import './AddTrackPage.css'
import { Container, Button, Form, Row, Col } from "react-bootstrap"

function AddTrackPage() {
    return (
        <div className='AddTrackPage' mt-8>
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>

                        <Form>
                            <Form.Group className="mb-3" controlId="title">
                                <Form.Control type="text" />
                                <Form.Label>Song Name</Form.Label>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="artist">
                                <Form.Control type="text" />
                                <Form.Label>Artist</Form.Label>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="album">
                                <Form.Control type="text" />
                                <Form.Label>Album</Form.Label>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="year">
                                <Form.Control type="number" />
                                <Form.Label>Year</Form.Label>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="length">
                                <Form.Control type="number" />
                                <Form.Label>Length</Form.Label>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="imageCover">
                                <Form.Control type="url" />
                                <Form.Label>Cover Image</Form.Label>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="genres">
                                <Form.Control type="text" />
                                <Form.Label>Genres</Form.Label>
                            </Form.Group>


                            <Form.Group className="mb-3">
                                <Form.Select id="disabledSelect">
                                    <option>  </option>
                                    <option>Yes</option>
                                    <option>No</option>
                                </Form.Select>
                                <Form.Label htmlFor="disabledSelect">Explicit</Form.Label>
                            </Form.Group>


                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>


                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AddTrackPage