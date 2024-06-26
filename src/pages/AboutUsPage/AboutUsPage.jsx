import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import "./AboutUsPage.css";
import { useState } from 'react';
import adri from "./../../assets/adri.gif"
import erno from "./../../assets/erno.gif"
export default function AboutUs() {
    const [isHoveredBlockFive, setIsHoveredBlockFive] = useState(false);
    const [isHoveredBlockFour, setIsHoveredBlockFour] = useState(false);
    const handleMouseEnterFive = () => {
        setIsHoveredBlockFive(true);
    };
    const handleMouseLeaveFive = () => {
        setIsHoveredBlockFive(false);
    };
    const handleMouseEnterFour = () => {
        setIsHoveredBlockFour(true);
    };
    const handleMouseLeaveFour = () => {
        setIsHoveredBlockFour(false);
    };
    return (
        <Container className="AboutUsPage">
            <marquee behavior="scroll" direction="left" className="marquee">
                ABOUT-US /ABOUT-US /ABOUT-US
            </marquee>
            <div className="firstBlockAbout">
                <h3>We are more than a record label. We are</h3>
                <h1>Partners in creation</h1>
            </div>
            <div className='AboutUsCards'>
                <Row className="mt-5 justify-content-center no-gutters">
                    <Col xs={12} md={6} className="photo">
                        <Card className={`cardFour ${isHoveredBlockFive ? 'hovered' : ''}`}
                            onMouseEnter={handleMouseEnterFive}
                            onMouseLeave={handleMouseLeaveFive}>
                            <Card.Img variant="top" src={erno} />
                            <div className={`blueOverlayFive ${isHoveredBlockFive ? 'hovered' : ''}`}></div>
                            <div className="textOverlayBlockFive">
                                <marquee direction="left"><h2><span>ERNESTO</span></h2></marquee>
                            </div>
                            <Card.Body>
                                <Card.Title>Ernesto Hilarión</Card.Title>
                                <Card.Text>
                                    Hello, my name is Erno, and I am a passionate programming student at IronHack. My favorite part is designing and creating products that have soul and character. Functionality must go hand in hand with UX/UI.
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item as="a" href="https://www.linkedin.com/in/ernestohilarion/" target="_blank">LinkedIn</ListGroup.Item>
                                <ListGroup.Item as="a" href="https://github.com/ernohilarion" target="_blank">GitHub</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} className="photo">
                        <Card className={`cardFive ${isHoveredBlockFour ? 'hovered' : ''}`}
                            onMouseEnter={handleMouseEnterFour}
                            onMouseLeave={handleMouseLeaveFour}>
                            <Card.Img variant="top" src={adri} />
                            <div className={`blueOverlayFour ${isHoveredBlockFour ? 'hovered' : ''}`}></div>
                            <div className="textOverlayBlockFour">
                                <marquee direction="left"><h2><span>ADRIAN</span></h2></marquee>
                            </div>
                            <Card.Body>
                                <Card.Title>Adrian Sobota</Card.Title>
                                <Card.Text>
                                    Hey! I'm Adri, I've always wanted to be a Full Stack Developer! I believe that products should be free, open, and accessible to everyone; no one should be left out. I am currently at IronHack Madrid to refine my knowledge and become a great professional.
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item as="a" href="https://www.linkedin.com/adrian-sobota" target="_blank">LinkedIn</ListGroup.Item>
                                <ListGroup.Item as="a" href="https://github.com/Yosobo" target="_blank">GitHub</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            </div>
            <div className="blockPhotoMatch">
                <img className="aboutUsPhotoOne" src={"https://gyazo.com/b1ebb117e8916e1753f9e1f0560dfeb4.jpg"} alt="Description of Image One" />
                <img className="aboutUsPhotoTwo" src={"https://gyazo.com/3bbba307d41425b7c382fd9f1a0d734a.jpg"} alt="Description of Image Two" />
                <img className="aboutUsPhotoThree" src={"https://gyazo.com/79e562bf89264f3224b6c77cc2a02d8d.png"} alt="Description of Image Three" />
            </div>
            <div className="secondBlockAbout">
                <div className="content">
                    <h1>WE'RE FIERCE IN OUR DEDICATION TO CREATIVE SPIRITS</h1>
                    <h3>Our artists redefine genres. Our artists define generations. Our artists change the world.
                        We are the home of some of the most iconic artists of all time - the dreamers, the believers, the truth-tellers, the ground shakers.
                        Powered by our legacy, it's time to build a new generation of believers, straight-shooters, and storytellers.</h3>
                </div>
            </div>
        </Container>
    );
}