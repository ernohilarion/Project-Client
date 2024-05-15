import './HomePage.css'
import coverapp from "./../../assets/coverapp.jpeg"
import darkCover from "./../../assets/darkCover.gif"
import BlockOne from "./../../assets/BlockOne.gif"
import Carousel from 'react-bootstrap/Carousel'
import Spinner from 'react-bootstrap/Spinner'
import cov1 from "./../../assets/cov1.jpg"
import cov2 from "./../../assets/cov2.jpg"
import cov3 from "./../../assets/cov3.jpg"
import cov4 from "./../../assets/cov4.jpg"
import cov5 from "./../../assets/cov5.jpg"
import cov6 from "./../../assets/cov6.jpg"
import badINTRO from "./../../assets/badINTRO.gif"
import React, { useState } from 'react';


function HomePage() {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div>
            <div className='HomePage'>
                <img src={badINTRO} alt="Cover" className="coverImage" />
                <div className="textOverlay">
                    <marquee direction="left"><h2><span>DROP HIT</span></h2></marquee>
                </div>
            </div>

            <Carousel>
                <Carousel.Item interval={1000}>
                    <img src={cov1} alt="Cover" text="First slide" />
                    <Carousel.Caption>
                        <h5>SONG NAME</h5>
                        <p>ARTIST NAME</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img src={cov2} alt="Cover" text="First slide" />
                    <Carousel.Caption>
                        <h5>SONG NAME</h5>
                        <p>ARTIST NAME</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img src={cov3} alt="Cover2" text="Second slide" />
                    <Carousel.Caption>
                        <h5>SONG NAME</h5>
                        <p>ARTIST NAME</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={cov4} alt="Cover4" text="Third slide" />
                    <Carousel.Caption>
                        <h5>SONG NAME</h5>
                        <p>ARTIST NAME</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={cov5} alt="Cover" text="Third slide" />
                    <Carousel.Caption>
                        <h5>SONG NAME</h5>
                        <p>ARTIST NAME</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={cov6} alt="Cover" text="Third slide" />
                    <Carousel.Caption>
                        <h5>SONG NAME</h5>
                        <p>ARTIST NAME</p>
                    </Carousel.Caption>
                </Carousel.Item>


            </Carousel>

            {/* <div className='HomePageBlockone blueOverlay'>
                <img src={darkCover} alt="Cover" className="coverImage" />
            </div> */}


            {/* <div className='blueOverlay'>
                
                <div
                    className={`HomePageBlockone ${isHovered ? '' : 'blueOverlay'}`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <img src={darkCover} alt="Cover" className="gifCoverOne" />
                </div>
            </div> */}


            <div className='HomePageBlockone'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                <img src={darkCover} alt="Cover" className="gifCoverOne" />
                <div className="textOverlayBlockone">
                    <marquee direction="left"><h2><span>BAD GYAL</span></h2></marquee>
                </div>
                <div
                    className={`blueOverlay ${isHovered ? 'hovered' : ''}`}
                ></div>
            </div>



            <div className='HomePageBlockTwo'>
                <img src={BlockOne} alt="Cover" className="gifCoverT" />
            </div>




            <div style={{ position: 'relative', width: '200px', height: '200px' }}>
                <Spinner
                    animation="border"
                    role="status"
                    style={{ width: '200px', height: '200px' }}
                >
                    <span className="visually-hidden">DROP HIT</span>
                    <h3 className="spinner-text">TEST</h3>
                </Spinner>
            </div>





            <div className='HomePage'>
                <img src={BlockOne} alt="Cover" className="coverImage" />
                <marquee direction="left"><h2><strong>DROP HIT</strong></h2></marquee>
            </div>
        </div>

    );
}


export default HomePage
