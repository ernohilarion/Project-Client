import "./ErrorPage.css"

import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"

const ErrorPage = () => {

    return (
        <div className="error-page">
            <article className="error">
                <img src='https://st3.depositphotos.com/8615356/13839/v/450/depositphotos_138392822-stock-illustration-page-not-found-error-404.jpg' alt="Error 404" />
                <div>
                    <h4>WOW! Something went wrong 😢</h4>
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