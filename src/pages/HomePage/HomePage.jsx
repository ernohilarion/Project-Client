import './HomePage.css'
import coverapp from "./../../assets/coverapp.jpeg"

function HomePage() {
    return (
        <div className='HomePage'>
            <br />

            <br />
            <br />
            <marquee direction="left"><h2><strong>DROPpppp HIiT</strong></h2></marquee>
            <img src={coverapp} alt="Cover" />


        </div>
    )
}

export default HomePage