import AddTracksForm from '../../components/AddTrackForm/AddTrackForm'
import './AddTrackPage.css'
import { Container, Row, Col } from "react-bootstrap"

function AddTrackPage() {

    return (
        <div className='AddTrackPage mt-5'>
            <Container>
                <h1>New track</h1>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>

                        <AddTracksForm />

                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default AddTrackPage