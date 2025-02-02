import { Container, Row, Col, Button } from "react-bootstrap";
import { fetchWeatherData } from "./utils/dataLoader";
import { useState } from "react";
import LeftPane from "./LeftPane";
import LocationDetails from "./LocationDetails";
import AddLocation from "./AddLocation";
import useFetchWeatherData from "./hooks/useFetchWeatherData";

function WTDesktop() {
    const initialLocations = [
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
    const [selected, setSelected] = useState(0)
    const {locations, setLocations, isLoading, errorMessage} = useFetchWeatherData(selected, initialLocations)
    const [isAddingOpen, setIsAddingOpen] = useState(false)

    const addLocation = ({name, lat, long}) => {
        setLocations(prevLocations => [...prevLocations, {name, lat, long, locationData: null } ])
        setSelected(locations.length)
        setIsAddingOpen(false)
    }

    return (
        <Container fluid className="weather_container">
            <Row>
                <Col xs={6}>
                    <Button 
                        className="m-2"
                        onClick={() => setIsAddingOpen(true)}
                    >
                        Lisa asukoht
                    </Button>
                    <LeftPane 
                        locations={locations} 
                        selected={selected} 
                        setSelected={(newSelected) => {
                            setSelected(newSelected)
                            setIsAddingOpen(false)
                        }} 
                    />
                </Col>
                <Col xs={6}>
                    {
                        isAddingOpen ? (
                            <AddLocation addLocation={addLocation} />
                        ) : (
                            <LocationDetails locationData={locations[selected]} />
                        )
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default WTDesktop