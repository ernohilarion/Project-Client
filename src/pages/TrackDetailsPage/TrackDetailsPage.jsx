import { Link } from "react-router-dom"
import './TrackDetailsPage.css'
import { Container, Button, Card, Row, Col } from "react-bootstrap"
import SOKOBAN from '../../assets/SOKOBAN.png'

function TrackDetailsPage() {
    return (
        <div className='AboutUsPage'>
            <Container>
                <Row>

                    <Col md={{ span: 6 }}>
                        <Card >
                            <Card.Img variant="top" src={SOKOBAN} />
                            <Card.Body>
                                <Card.Title>cancion 1</Card.Title>
                                <Card.Text>
                                    detalles
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>



                </Row>
            </Container>
        </div>
    )
}


export default TrackDetailsPage