import { DateTime } from 'luxon'
import * as fetchImport from 'isomorphic-unfetch'

// Work around for typescript types not being correct.
// https://github.com/developit/unfetch/issues/99
const fetch = (fetchImport.default || fetchImport) as typeof fetchImport.default

const API_URL = 'http://api.openweathermap.org/data/2.5/weather'

export type WeatherEntry = {
    description: string; // clear sky
    temperature: number; // Converted to F°
    pressure: number;
    humidity: number;
    windSpeed: number;
    localTime: string;
    timezoneName: string;
}


export const getWeather: (location: string) => Promise<WeatherEntry> = async (location: string) => {
    try {
        const API_KEY = process.env.API_KEY || "OPEN WEATHER API KEY MISSING"
        const apiParams = getLookupParams(location)

        const weatherResult = await fetch(`${API_URL}?${apiParams}&appid=${API_KEY}`)
        const jsonResult = await weatherResult.json()

        return {
            description: jsonResult.weather[0]?.description,
            temperature: kelvenToFahrenheit(jsonResult.main.temp),
            humidity: jsonResult.main.humidity,
            pressure: jsonResult.main.pressure,
            windSpeed: jsonResult.wind?.speed,
            localTime: DateTime.local().setZone(jsonResult.timezone).toFormat('HH:mm'),
            timezoneName: jsonResult.name,
        }

    } catch (err) {        
        // Normally I could log this to error console.  But keeping it commented out for the sake of
        // keeping the console clean for this exercies.
        // console.error(`Unable to fetch weather for: ${location}`, err)

        throw new Error('Unable to find weather')
    }
}

const getLookupParams = (location: string) => {
    const isZipCode = /^\d{5}(-\d+)?$/.test(location)

    if (isZipCode) {
        return `zip=${location},us`
    }
    return `q=${encodeURIComponent(location)}`
}

const kelvenToFahrenheit = (kelvins: number) => {
    return (kelvins - 273.15) * (9 / 5) + 32
}