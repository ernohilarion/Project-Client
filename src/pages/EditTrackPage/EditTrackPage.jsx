import EditTrackForm from '../../components/EditTrackForm/EditTrackForm'
import './EditTrackPage.css'
import { Container, Row, Col } from "react-bootstrap"


function EditTrackPage() {

    return (
        <div className='EditTrackPage mt-5'>
            <Container>
                <marquee behavior="scroll" direction="left" className="marquee">
                    EDIT-TRACK /EDIT-TRACK /EDIT-TRACK
                </marquee>
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