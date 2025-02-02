
const weather = {
    0: 'Splended',
    1: 'Nice',
    2: 'Average',
    3: 'Rainy',
    4: 'Stormy',
}

async function fetchWeatherData(lat, long) {
    const paringuUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`
    const response = await fetch(paringuUrl)
    if (!response.ok) {
        throw new Error('Data fetching failed. Try again later.')
    }
    const andmed = await response.json()
    console.log(andmed)
    const cw = andmed.current_weather

    return {
        temperature: cw.temperature,
        time: cw.time,
        weather: weather[cw.weathercode],
        winddirection: cw.winddirection
    }
}

export {
    fetchWeatherData
}