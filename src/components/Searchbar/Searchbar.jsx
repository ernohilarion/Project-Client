import './Searchbar.css'
import axios from 'axios'
import { useState } from 'react'
import { Form, ListGroup } from "react-bootstrap"
import { Link } from "react-router-dom"
const apiURL = import.meta.env.VITE_API_URL

const Searchbar = () => {

    const [input, setInput] = useState([])

    const handleEvent = (e) => {
        const { value } = e.target
        value ? fetchValue(value) : setInput([])
    }

    const fetchValue = value => {
        axios
            .get(`${apiURL}/tracks?title_like=${value}`)
            .then(({ data }) => setInput(data))
            .cath(error => console.log(error))
    }

    const handleResultsOnClick = () => {
        setInput([]);
    }

    return (
        <div className="SearchBar">
            <Form>
                <Form.Control
                    type="text"
                    placeholder="Search a track"
                    onKeyUp={handleEvent}
                />
            </Form>
            <ListGroup className="ListGroupSearch">
                {
                    input.map(track => {
                        return (
                            <Link key={track.id} to={`/details-track/${track.id}`} className="link-style" onClick={handleResultsOnClick}>
                                <ListGroup.Item>
                                    <div className="img-title">
                                        <img src={track.cover} alt={track.title} />
                                        {track.title}
                                    </div>
                                </ListGroup.Item>
                            </Link>
                        )
                    })
                }
            </ListGroup>
        </div>
    )
}

export default Searchbar