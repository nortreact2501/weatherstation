import { useState } from "react"
import { Form, FormLabel, Button } from "react-bootstrap"

function AddLocation({addLocation}) {
    const [name, setName] = useState('')
    const [lat, setLat] = useState('')
    const [long, setLong] = useState('')

    const submitNewLocation = () => {
        addLocation({name, lat, long})
    }

    return (
        <Form>
            <Form.Label>Nimi</Form.Label>
            <Form.Control 
                type="text"
                value={name}
                onChange={({target}) => {setName(target.value)}}
            />
            <Form.Group>
                <FormLabel>Laiuskraad</FormLabel>
                <Form.Control 
                    type="text"
                    value={lat}
                    onChange={({target}) => {setLat(target.value)}}
                />
                <FormLabel>Pikkuskraad</FormLabel>                    
                <Form.Control 
                    type="text"
                    value={long}
                    onChange={({target}) => {setLong(target.value)}}
                />

                <Button onClick={submitNewLocation} className="mt-2">Lisa</Button>
            </Form.Group>
        </Form>
    )
}

export default AddLocation