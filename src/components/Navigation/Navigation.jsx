import './Navigation.css';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Sidebar from '../Sidebar/Sidebar';

function Navigation() {
    return (
        <Navbar className="bg-body-tertiary rounded-navbar">
            <Container fluid>
                <Sidebar />
                <Navbar.Brand href="/">
                    <Link to="/">
                        <img
                            src="https://em-content.zobj.net/source/apple/325/headphone_1f3a7.png"
                            alt="DROP HIT Logo"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                        DROP HIT
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Link to="/add-track">
                        <Button variant="primary" className="rounded-circle">✚</Button>
                    </Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;
