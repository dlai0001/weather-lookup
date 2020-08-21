import * as dotenv from 'dotenv'
import {getWeather, WeatherEntry} from './src/weather-lookup-service'

const main = async () => {
    dotenv.config()

    const locations = getLocations()    
    
    for(let location of locations) {
        try {
            const forecast: WeatherEntry = await getWeather(location)
            
            console.log(`
                location: ${location} 
                time: ${forecast.localTime} (${forecast.timezoneName})
                ${forecast.description}
                temperature: ${forecast.temperature.toFixed(2)} F°,
                humidity: ${forecast.humidity}
                pressure: ${forecast.pressure}
            `)

        } catch (err) {
            console.log(`Unable to get weather for "${location}"`)
        }
    }
}

const getLocations: () => string[] = () => {
    const scriptArgIndex = process.argv.findIndex(x => x.includes('index.ts'))
    
    if(scriptArgIndex >= 0) {
        return process.argv.slice(scriptArgIndex + 1)
    }
    return process.argv
}




main()
