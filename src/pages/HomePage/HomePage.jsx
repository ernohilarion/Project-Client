import './HomePage.css'
import coverapp from "./../../assets/coverapp.jpeg"
import { Carousel } from 'react-bootstrap'

function HomePage() {

    return (

        <div className='HomePage'>
<<<<<<< HEAD
            <br />

            <br />
            <br />
            <marquee direction="left"><h2><strong>DROP HIiT</strong></h2></marquee>
            <img src={coverapp} alt="Cover" />


=======
            <img src={coverapp} alt="Cover" className="coverImage" />
            <marquee direction="left"><h2><strong>DROP HIT</strong></h2></marquee>
>>>>>>> 9d14b2596cde83487472204aa7cc58cf7f93e6ea
        </div>
    );
}

export default HomePage
