import { Container, Row, Col } from "react-bootstrap";
import { fetchWeatherData } from "./utils/dataLoader";

function WTDesktop() {
    return (
        <Container fluid>
            <Row>
                <Col xs={4}>
                    Vasak paan
                </Col>
                <Col xs={8}>
                    Parem paan
                    <button onClick={() => fetchWeatherData('58.3917', '24.4953')} >Loe andmed</button>
                </Col>
            </Row>
        </Container>
    )
}

export default WTDesktop