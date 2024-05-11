import { Container, Row, Col, Card, ListGroup } from "react-bootstrap"
import SOKOBAN from "./../../assets/SOKOBAN.png"
import "./AboutUsPage.css"

export default function AboutUs() {
    return (
        <Container className="about">
            <h1 className="header">What about US?!</h1>
            <Row className="mt-5 justify-content-center">
                <Col xs={12} md={6} className="photo">
                    <Card className="card">
                        <Card.Img variant="top" src={SOKOBAN} />
                        <Card.Body>
                            <Card.Title>Ernesto</Card.Title>
                            <Card.Text>
                                Hello! I’m Erno, a passionate Full Stack Developer currently honing my skills at IronHack. With a focus on JavaScript, React, and Bootstrap, I strive to create seamless and dynamic user experiences. My journey into coding started out of curiosity but quickly grew into a passion as I discovered the power of building functional, aesthetically pleasing applications from scratch. At IronHack, I've been part of a collaborative environment, where I've developed not only my technical skills but also my ability to work effectively in diverse teams. I'm eager to bring my knowledge and enthusiasm to a team that values innovative solutions and a proactive approach.
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
                        <Card.Img variant="top" src={SOKOBAN} />
                        <Card.Body>
                            <Card.Title>Adrian Sobota</Card.Title>
                            <Card.Text>
                                Hi, I’m Adri, a dedicated Full Stack Developer specializing in JavaScript, React, and Bootstrap, currently expanding my expertise at IronHack. My approach to development is centered around a user-first perspective, ensuring that the applications I build are not only technically sound but also intuitive and accessible. Through IronHack's rigorous program, I have sharpened my problem-solving skills and learned to adapt quickly to new challenges, preparing me to tackle real-world projects with confidence. I am excited to contribute to a forward-thinking team that prioritizes creativity and efficiency in software development.
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
    )
}
