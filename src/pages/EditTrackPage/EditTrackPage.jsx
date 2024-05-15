import EditTrackForm from '../../components/EditTrackForm/EditTrackForm'
import './EditTrackPage.css'
import { Container, Row, Col } from "react-bootstrap"


function EditTrackPage() {

    return (
        <div className='EditTrackPage mt-5'>
            <Container>
                <h1>Edit track</h1>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>

                        <EditTrackForm />

                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default EditTrackPage