import './Navbar.css';
import '../../assets/navIcon.png'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function BrandExample() {
    return (
        <>
            <br />
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Button variant="link" className="border-0">TESTESTESTESTEST</Button>
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src="https://em-content.zobj.net/source/apple/325/headphone_1f3a7.png" // Test
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        HackTracks
                    </Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end">
                        <Button variant="outline-primary" className="me-2">♥︎</Button>
                        <Button variant="primary" className="rounded-circle">✚</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default BrandExample;
