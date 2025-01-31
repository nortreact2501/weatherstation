import { Container, Row, Col } from "react-bootstrap";
import {  useState } from "react";
import LeftPane from "./LeftPane";
import LocationDetails from "./LocationDetails";
import useFetchWeatherData from "./components/useFetchWeatherData";

function WTDesktop() {
    const [selected, setSelected] = useState(0)
    const {locations, setLocations, isLoading, isError} = useFetchWeatherData(
        selected,
        [
            {
                name: 'Pärnu',
                lat: 58.3917,
                long: 24.4953,
                locationData: null
            },
            {
                name: 'Tallinn',
                lat: 59.437,
                long: 24.7536,
                locationData: null
            },
        ]
    );

    return (
        <Container fluid>
            <Row>
                <Col xs={6}>
                    <LeftPane locations={locations} selected={selected} setSelected={setSelected} />
                </Col>
                <Col xs={6}>
                    <LocationDetails locationData={locations[selected]} />
                </Col>
            </Row>
        </Container>
    )
}

export default WTDesktop