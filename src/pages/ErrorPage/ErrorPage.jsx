import "./ErrorPage.css"
import SOKOBAN from './../../assets/SOKOBAN.png'
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"

const ErrorPage = () => {

    return (
        <div className="error-page">
            <article className="error">
                <img src={SOKOBAN} alt="Error 404" />
                <div>
                    <h2>WOW! Something went wrong 😢</h2>
                    <p>But no problem, it's just a 404 error! We've got you covered—just click below to go back to a safe place.</p>
                    <Link to="/">
                        <Button>
                            Home Page
                        </Button>
                    </Link>
                </div>
            </article>
        </div>
    )
}

export default ErrorPage