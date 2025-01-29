import { Container, Row, Col } from "react-bootstrap";
import { fetchWeatherData } from "./utils/dataLoader";
import { useEffect, useState } from "react";
import LeftPane from "./LeftPane";
import LocationDetails from "./LocationDetails";

function WTDesktop() {
    const [locations, setLocations] = useState([
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
    ])

    const [selected, setSelected] = useState(0)

    useEffect(() => {
        console.log('selected location is now ' + selected);
        loadWeatherData();
    }, [selected])

    const loadWeatherData = async () => {
        const {lat, long} = locations[selected];
        const weahterData = await fetchWeatherData(lat, long)
        console.log(weahterData)
        setLocations((prevLoc) => {
            return prevLoc.map((el, i) => {
                if (i !== selected) {
                    return el
                }
                return {...el, locationData: weahterData}
            })
        })
    }

    return (
        <Container fluid>
            <Row>
                <Col xs={6}>
                    <LeftPane locations={locations} selected={selected} setSelected={setSelected} />
                </Col>
                <Col xs={6}>
                    <LocationDetails locationData={locations[selected]} />
                    <button onClick={() => fetchWeatherData('58.3917', '24.4953')} >Loe andmed</button>
                </Col>
            </Row>
        </Container>
    )
}

export default WTDesktop