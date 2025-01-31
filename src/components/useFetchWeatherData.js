import { useState, useEffect } from "react";
import { fetchWeatherData } from "../utils/dataLoader";
function useFetchWeatherData(selected, initialData) {
    const [locations, setLocations] = useState(initialData);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);
            try {
                const {lat, long} = locations[selected];
                const result = await fetchWeatherData(lat, long)
                console.log(result)
                setLocations((prevLoc) => {
                    return prevLoc.map((el, i) => {
                        if (i !== selected) {
                            return el
                        }
                        return {...el, locationData: result}
                    })
                })
            } catch (error) {
                setIsError(true);
            }

            setIsLoading(false);
        }

        fetchData();
    }, [selected]);
    return {locations, setLocations, isLoading, isError};
}

export default useFetchWeatherData;