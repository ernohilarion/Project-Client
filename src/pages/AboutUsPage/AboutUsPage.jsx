// AboutUsPage.jsx
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import erno from './../../assets/ernoPhoto.png';
import adri from './../../assets/adriPhoto.jpeg';
import "./AboutUsPage.css";

export default function AboutUs() {
    return (
        <Container className="AboutUsPage">
            <marquee behavior="scroll" direction="left" className="marquee">
                ABOUT-US /ABOUT-US /ABOUT-US
            </marquee>
            <Row className="mt-5 justify-content-center">
                <Col xs={12} md={6} className="photo">
                    <Card className="card">
                        <Card.Img variant="top" src={erno} />
                        <Card.Body>
                            <Card.Title>Ernesto Hilarión</Card.Title>
                            <Card.Text>
                                Hello! I’m Erno, a passionate Full Stack Developer currently honing my skills at IronHack...blabablbaba
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item as="a" href="https://linkedin.com" target="_blank">LinkedIn</ListGroup.Item>
                            <ListGroup.Item as="a" href="https://github.com" target="_blank">GitHub</ListGroup.Item>
                        </ListGroup>
                    </Card>

                </Col>

                <Col xs={12} md={6} className="photo">
                    <Card className="card">
                        <Card.Img variant="top" src={adri} />
                        <Card.Body>
                            <Card.Title>Adrian Sobota</Card.Title>
                            <Card.Text>
                                Hi, I’m Adri, a dedicated Full Stack Developer specializing in JavaScript...blablablabab
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item as="a" href="https://www.linkedin.com" target="_blank">LinkedIn</ListGroup.Item>
                            <ListGroup.Item as="a" href="https://github.com" target="_blank">GitHub</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
