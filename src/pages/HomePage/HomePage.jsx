import './HomePage.css'
import coverapp from "./../../assets/coverapp.jpeg"
import badgif from './../../assets/test.gif'
import { Carousel } from 'react-bootstrap'

function HomePage() {

    return (

        <div className='HomePage'>
            <img src={badgif} alt="Cover" className="coverImage" />
            <marquee direction="left"><h2><strong>DROP HIT</strong></h2></marquee>
        </div>


    );
}

export default HomePage
