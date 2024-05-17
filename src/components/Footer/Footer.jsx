import './Footer.css'
import { Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <footer className="footer">



            <Row>
                <Col md={{ span: 2 }}>
                    <ul className="footer-list">
                        <li>ABOUT</li>
                        <li>ARTISTS</li>
                        <li>JOBS</li>
                        <li>NEWS</li>
                    </ul>
                </Col>
                <Col>
                    <ul className="footer-list">
                        <li>YOUTUBE</li>
                        <li>TWITTER</li>
                        <li>INSTAGRAM</li>
                        <li>FACEBOOK</li>
                        <li>TIKTOK</li>
                    </ul>
                </Col>
            </Row>



            <div className='footerRights'>
                <p className="text-center mt-4 mb-4">All rights reserved 2024©</p>
            </div>
        </footer>
    )
}

export default Footer