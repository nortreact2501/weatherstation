function LocationDetails({locationData}) {
    if (!locationData.locationData) {
        return <div>Loading ...</div>
    }

    const weather = locationData.locationData
    return (
        <div>
            <h2>Ilm kohas {locationData.name} </h2>
            <div>
                Temperatuur: {weather.temperature}
            </div>
            <div>
                Tuule suund: {weather.winddirection}
            </div>
        </div>
    )
}

export default LocationDetails