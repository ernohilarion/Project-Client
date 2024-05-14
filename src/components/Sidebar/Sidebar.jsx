import AboutUsPage from '../../pages/AboutUsPage/AboutUsPage'
import AllTracksPage from '../../pages/AllTracksPage/AllTracksPage'
import LikedTracksPage from '../../pages/LikedTracksPage/LikedTracksPage'
import './Sidebar.css'
import navIcon from '../../assets/navIcon.png'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';
// import SearchBar from '../Searchbar/Searchbar'

const Sidebar = () => {
    const [show, setShow] = useState(false);



    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="translucent" onClick={handleShow}>
                <img src={navIcon} alt='Navicon' className='navIcon' />
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>DROP HIT</Offcanvas.Title>
                </Offcanvas.Header>
                {/* <SearchBar /> */}
                <Offcanvas.Body>
                    <ul>
                        <li>
                            <Link to={'/all-tracks'}>All Tracks</Link>

                        </li>

                        <li>
                            <Link to={'/liked-tracks'}>Liked Tracks</Link>
                        </li>

                        <li>
                            <Link to={'/about-us'}>About Us</Link>
                        </li>
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default Sidebar