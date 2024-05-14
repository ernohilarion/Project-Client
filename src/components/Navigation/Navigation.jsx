import './Navigation.css';
import { Link, useParams, useNavigate } from "react-router-dom";
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
