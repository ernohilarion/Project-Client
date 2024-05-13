import { Form, ListGroup } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./Searchbar.css"
import { useState } from "react"
import axios from "axios"

const apiURL = "http://localhost:5005/tracks"

const SearchBar = () => {

    const [results, setResults] = useState([])

    const handleQuerySearch = event => {
        const { value } = event.target

        value.length > 1 ? fetchResults(value) : setResults([])
    }

    const fetchResults = value => {
        axios
            .get(`${apiURL}/all-tracks?title_like=${value}`)
            .then(({ data }) => setResults(data))
            .catch(err => console.log(err))
    }

    const handleResultsClick = () => {
        setResults([])
    }


    return (
        <div className="SearchBar">
            <Form>
                <Form.Control
                    type="text"
                    placeholder="Drop that hit..."
                    onKeyUp={handleQuerySearch}
                />
            </Form>
            <ListGroup className="ListGroup">
                {
                    results.map(elm => {
                        return (
                            <Link key={elm.id} to={`/all-tracks/${elm.id}`} className="link-style" onClick={handleResultsClick}>
                                <ListGroup.Item>
                                    <div className="img-title"><img src={elm.cover} alt="book-img" />{elm.title}</div>
                                </ListGroup.Item>
                            </Link>
                        )
                    })
                }
            </ListGroup>
        </div>
    )
}

export default SearchBar