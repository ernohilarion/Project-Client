import './Navbar.css';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Sidebar from '../Sidebar/Sidebar';

function NavbarComp() {
    return (
        <>
            <br />
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Sidebar />
                    <Navbar.Brand>
                        <Link to="/">
                            <img
                                alt=""
                                src="https://em-content.zobj.net/source/apple/325/headphone_1f3a7.png" // Test
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />
                            DROP HIT
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end">
                        <Link to="/add-track">
                            <Button variant="primary" className="rounded-circle">✚</Button>
                        </Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavbarComp;
