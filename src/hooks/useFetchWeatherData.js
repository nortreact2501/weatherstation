import { fetchWeatherData } from "../utils/dataLoader"
import { useEffect, useState } from "react";

function useFetchWeatherData(selected, initalData) {
    const [locations, setLocations] = useState(initalData)
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        console.log('selected location is now ' + selected);
        loadWeatherData();
    }, [selected])

    const loadWeatherData = async () => {
        setIsLoading(true)
        setErrorMessage('')
        const {lat, long} = locations[selected];
        try {
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
        } catch (error) {
            console.log(error)
            setErrorMessage(error.message)
        }
        setIsLoading(false)
    }

    return {locations, setLocations, isLoading, errorMessage}

}

export default useFetchWeatherData