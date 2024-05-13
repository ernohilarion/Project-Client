import { Form, ListGroup } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./Searchbar.css"
import { useState } from "react"
import axios from "axios"

const apiURL = "http://localhost:5005/tracks"

const SearchBar = () => {

    const [results, setResults] = useState([])

    const handleQuery = event => {
        const { value } = event.target

        value.length > 1 ? fetch(value) : setResults([])
    }

    const fetch = value => {
        axios
            .get(`${apiURL}/all-tracks?title_like=${value}`)
            .then(({ data }) => setResults(data))
            .catch(err => console.log(err))
    }

    const handleResultsOnClick = () => {
        setResults([])
    }


    return (
        <div className="SearchBar">
            <Form>
                <Form.Control
                    type="text"
                    placeholder="Search a track"
                    onKeyUp={handleQuery}
                />
            </Form>
            <ListGroup className="ListGroupSearch">
                {
                    results.map(e => {
                        return (
                            <Link key={e.id} to={`/all-tracks/${e.id}`} className="link-style" onClick={handleResultsOnClick}>
                                <ListGroup.Item>
                                    <div className="img-title"><img src={e.cover} alt="TestDomingo" />{e.title}</div>
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