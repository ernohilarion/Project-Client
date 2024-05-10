import { Link } from "react-router-dom"
import './AboutUsPage.css'
import { Container, Button, Card, Row, Col } from "react-bootstrap"
import SOKOBAN from '../../assets/SOKOBAN.png'





function AboutUsPage() {
    return (
        <div className='AboutUsPage'>
            <Container>
                <Row>

                    <Col md={{ span: 6 }}>
                        <Card >
                            <Card.Img variant="top" src={SOKOBAN} />
                            <Card.Body>
                                <Card.Title>ERNO</Card.Title>
                                <Card.Text>
                                    CEO
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={{ span: 6 }}>
                        <Card >
                            <Card.Img variant="top" src={SOKOBAN} />
                            <Card.Body>
                                <Card.Title>ADRIAN</Card.Title>
                                <Card.Text>
                                    CEO
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default AboutUsPage