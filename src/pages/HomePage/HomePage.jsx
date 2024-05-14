import './HomePage.css'
import coverapp from "./../../assets/coverapp.jpeg"
import { Carousel } from 'react-bootstrap'

function HomePage() {

    return (

        <div className='HomePage'>
            <img src={coverapp} alt="Cover" className="coverImage" />
            <marquee direction="left"><h2><strong>DROP HIT</strong></h2></marquee>
        </div>


    );
}

export default HomePage
