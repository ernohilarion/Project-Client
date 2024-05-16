import './HomePage.css'
import Carousel from 'react-bootstrap/Carousel'
import Spinner from 'react-bootstrap/Spinner'
import React, { useState } from 'react';

import { Link } from 'react-router-dom'



function HomePage() {

    const [isHoveredBlockOne, setIsHoveredBlockOne] = useState(false);
    const [isHoveredBlockTwo, setIsHoveredBlockTwo] = useState(false);
    const [isHoveredBlockThree, setIsHoveredBlockThree] = useState(false);

    return (
        <div>
            <div className="marquee-container">
                <div className="textOverlay">
                    <marquee direction="left" scrollamount="20"><h2><span>DROP HIT</span></h2></marquee>
                    <marquee direction="right" scrollamount="20"><h4><span>by RCA Records</span></h4></marquee>
                </div>
                <div className="carousel-container">
                    <Carousel>
                        <Carousel.Item interval={9000}>
                            <div className='HomePage'>
                                <img src={"https://gyazo.com/8c1a885e680f1d36701af4fd9f346a52.gif"} alt="Cover" className="coverImage" />
                            </div>
                        </Carousel.Item>
                        <Carousel.Item interval={9000}>
                            <div className='HomePage'>
                                <img src={"https://gyazo.com/0bdd72a779737386f1d6dfd833334aa4.gif"} alt="Cover" className="coverImage" />
                            </div>
                        </Carousel.Item>
                        <Carousel.Item interval={9000}>
                            <div className='HomePage'>
                                <img src={"https://gyazo.com/a349ca6635d24ecccc2cf7b235c73e85.gif"} alt="Cover" className="coverImage" />
                            </div>
                        </Carousel.Item>
                        <Carousel.Item interval={9000}>
                            <div className='HomePage'>
                                <img src={"https://i.gyazo.com/28c49e67f897a700bc2ed604dc496e70.gif"} alt="Cover" className="coverImage" />
                            </div>
                        </Carousel.Item>
                        <Carousel.Item interval={9000}>
                            <div className='HomePage'>
                                <img src={"https://gyazo.com/15aa9196d26d624887d9fa7a60507efa.gif"} alt="Cover" className="coverImage" />
                            </div>
                        </Carousel.Item>
                        <Carousel.Item interval={9000}>
                            <div className='HomePage'>
                                <img src={"https://gyazo.com/358625d88a0a6dfe86ee6a299cdbf024.gif"} alt="Cover" className="coverImage" />
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>


            <div>
                <Carousel className='blockOne'>
                    <Carousel.Item interval={3000}>
                        <img src={"https://gyazo.com/995506835bbe3ab2f58b939d472fe63a.jpg"} alt="Cover" className="carousel-image" />
                        <Carousel.Caption>
                            <h5>TATE MCRAE</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img src={"https://gyazo.com/d3f319a3950d17327ac878ed583db369.jpg"} alt="Cover" className="carousel-image" />
                        <Carousel.Caption>
                            <h5>FRENNA</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img src={"https://gyazo.com/242de7a905e170e33b8044112beab960.jpg"} alt="Cover2" className="carousel-image" />
                        <Carousel.Caption>
                            <h5>ADAMA JALLOH</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img src={"https://gyazo.com/89b5f2f9bfccf967cd17d7ee18684846.jpg"} alt="Cover4" text="First slide" className="carousel-image" />
                        <Carousel.Caption>
                            <h5>TS ELIOT</h5>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img src={"https://gyazo.com/b66c74adec5cc1e4ac5136a1a2c3fa0a.jpg"} alt="Cover" text="First slide" className="carousel-image" />
                        <Carousel.Caption>
                            <h5>FOUSHEÉ</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img src={"https://gyazo.com/0805c30519e5cbbbeed121b03a9b3d3b.jpg"} alt="Cover" text="First slide" className="carousel-image" />
                        <Carousel.Caption>
                            <h5>SOAM COOKE</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img src={"https://gyazo.com/f32e1173df59183d9593ff55dda35984.jpeg"} alt="Cover" text="First slide" className="carousel-image" />
                        <Carousel.Caption>
                            <h5>BAD GYAL</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img src={"https://gyazo.com/80ecda7d9dd5720eff2c7020eda24801.jpg"} alt="Cover" text="First slide" className="carousel-image" />
                        <Carousel.Caption>
                            <h5>LOST FREQUENCIES</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img src={"https://gyazo.com/5590ec4bfc3a81c63ba9169f4fde6e3f.jpg"} alt="Cover" text="First slide" className="carousel-image" />
                        <Carousel.Caption>
                            <h5>TEMS</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img src={"https://gyazo.com/7a71820d50d35dc707f47f17d2753cf9.jpg"} alt="Cover" text="First slide" className="carousel-image" />
                        <Carousel.Caption>
                            <h5>ELVIS PRESLEY</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img src={"https://gyazo.com/4e164174e884fc489d804cc52a778d35.jpg"} alt="Cover" text="First slide" className="carousel-image" />
                        <Carousel.Caption>
                            <h5>VICTORIA MONÉT</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img src={"https://gyazo.com/530ffdf2d1936aeeefcebe7aedc939f3.jpg"} alt="Cover" text="First slide" className="carousel-image" />
                        <Carousel.Caption>
                            <h5>DAVID BOWIE</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img src={"https://gyazo.com/5bdde84ed31fb78401e0c74f87dfae03.jpg"} alt="Cover2" text="First slide" className="carousel-image" />
                        <Carousel.Caption>
                            <h5>SZA</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img src={"https://gyazo.com/c508969709d53b98bf8b2b2d4858ba98.jpg"} alt="Cover4" text="First slide" className="carousel-image" />
                        <Carousel.Caption>
                            <h5>ISAAC DUNBAR</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img src={"https://gyazo.com/a167b17117daf42f703c0bba52f4eb30.jpg"} alt="Cover" text="First slide" className="carousel-image" />
                        <Carousel.Caption>
                            <h5>LATTO</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img src={"https://gyazo.com/1c8e5e6d9e377b24bfb07cdb2ca58de0.jpg"} alt="Cover" text="First slide" className="carousel-image" />
                        <Carousel.Caption>
                            <h5>CHANNEL TRES</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img src={"https://gyazo.com/f04e33fd086defa9313f12108a399e7d.jpg"} alt="Cover" text="First slide" className="carousel-image" />
                        <Carousel.Caption>
                            <h5>DOJA CAT</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img src={"https://gyazo.com/420dcf03e84649504bc1e3a802340f84.jpg"} alt="Cover" text="First slide" className="carousel-image" />
                        <Carousel.Caption>
                            <h5>ASAP ROCKY</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img src={"https://gyazo.com/96eb3a7abbe913f0f6005863ac323257.jpg"} alt="Cover" text="First slide" className="carousel-image" />
                        <Carousel.Caption>
                            <h5>NINA SIMONE</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img src={"https://gyazo.com/8e381a2916e677435bb48942244c34cb.jpg"} alt="Cover" text="First slide" className="carousel-image" />
                        <Carousel.Caption>
                            <h5>KHALID</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>



            <div>
                <div className='HomePageBlockone'
                    onMouseEnter={() => setIsHoveredBlockOne(true)}
                    onMouseLeave={() => setIsHoveredBlockOne(false)}>
                    <img src={"https://gyazo.com/d37169cbee4bc9841b49bf13113b610a.gif"} alt="Cover" className="gifCoverOne" />
                    <div className="textOverlayBlockone">
                        <marquee direction="left"><h2><span>CHILDISH GAMBINO</span></h2></marquee>
                    </div>
                    <div
                        className={`blueOverlay ${isHoveredBlockOne ? 'hovered' : ''}`}
                    ></div>
                </div>

                <div className='HomePageBlockTwo'
                    onMouseEnter={() => setIsHoveredBlockTwo(true)}
                    onMouseLeave={() => setIsHoveredBlockTwo(false)}>
                    <img src={"https://gyazo.com/a72af1364f40273850d1b9d491ce48d8.gif"} alt="Cover" className="gifCoverTwo" />
                    <div className="textOverlayBlockTwo">
                        <marquee direction="left"><h2><span>ARIANA GRANDE</span></h2></marquee>
                    </div>
                    <div
                        className={`blueOverlayTwo ${isHoveredBlockTwo ? 'hovered' : ''}`}
                    ></div>
                </div>

                <div className='HomePageBlockThree'
                    onMouseEnter={() => setIsHoveredBlockThree(true)}
                    onMouseLeave={() => setIsHoveredBlockThree(false)}>
                    <img src={"https://gyazo.com/bb79b2bd6fb04c269daae345657c2252.gif"} alt="Cover" className="gifCoverThree" />
                    <div className="textOverlayBlockThree">
                        <marquee direction="left"><h2><span>TYLER, THE CREATOR</span></h2></marquee>
                    </div>
                    <div
                        className={`blueOverlayThree ${isHoveredBlockThree ? 'hovered' : ''}`}
                    ></div>
                </div>
            </div>

            <br />

            <div>
                <div style={{ display: 'flex' }}>
                    <Link to="/all-tracks" style={{ flex: '1', textAlign: 'center', textDecoration: 'none' }}>
                        <div style={{ width: '250px', height: '250px', margin: 'auto' }}>
                            <Spinner
                                animation="border"
                                role="status"
                                style={{ width: '250px', height: '250px' }}
                                className="spinner"
                            >
                                <span className="visually-hidden">DROP HIT</span>
                                <h4 className="spinner-text"><strong>ALL</strong> TRACKS</h4>
                            </Spinner>
                        </div>
                    </Link>
                    <Link to="/liked-tracks" style={{ flex: '1', textAlign: 'center', textDecoration: 'none' }}>
                        <div style={{ width: '250px', height: '250px', margin: 'auto' }}>
                            <Spinner
                                animation="border"
                                role="status"
                                style={{ width: '250px', height: '250px' }}
                                className="spinner"
                            >
                                <span className="visually-hidden">DROP HIT</span>
                                <h4 className="spinner-text"><strong>LIKED </strong>TRACKS</h4>
                            </Spinner>
                        </div>
                    </Link>
                    <Link to="/about-us" style={{ flex: '1', textAlign: 'center', textDecoration: 'none' }}>
                        <div style={{ width: '250px', height: '250px', margin: 'auto' }}>
                            <Spinner
                                animation="border"
                                role="status"
                                style={{ width: '250px', height: '250px' }}
                                className="spinner"
                            >
                                <span className="visually-hidden">DROP HIT</span>
                                <h4 className="spinner-text">ABOUT <strong>US</strong></h4>
                            </Spinner>
                        </div>
                    </Link>
                </div>
            </div>
            <br />

        </div>

    );
}


export default HomePage
