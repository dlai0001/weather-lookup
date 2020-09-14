jest.mock('node-fetch');

import { getWeather } from './weather-lookup-service'
import fetch, { Response } from 'node-fetch';
jest.useFakeTimers();

describe('getWeather', () => {
    it('should fetch weather', async () => {
        jest
            .spyOn(global.Date, 'now')
            .mockImplementationOnce(() => new Date(`2010`).valueOf());

        (fetch as any).mockReturnValue(Promise.resolve({ json: () => mockResponse }))

        const result = await getWeather('Moscow')

        expect(result).toMatchObject({
            description: 'fog',
            temperature: 52.05200000000008,
            humidity: 100,
            pressure: 1019,
            windSpeed: 1,
            localTime: '12:00',
            timezoneName: 'Moscow'
        })

    })

    it('should reject if unable to find location', async () => {
        jest
            .spyOn(global.Date, 'now')
            .mockImplementationOnce(() => new Date(`2010`).valueOf());

        (fetch as any).mockReturnValue(Promise.reject());

        const result = await getWeather('Moscow')

        expect(result).toMatchObject({
            description: 'fog',
            temperature: 52.05200000000008,
            humidity: 100,
            pressure: 1019,
            windSpeed: 1,
            localTime: '12:00',
            timezoneName: 'Moscow'
        });

    });
})


const mockResponse = {
    "coord": {
        "lon": 37.62,
        "lat": 55.75
    },
    "weather": [{
        "id": 741,
        "main": "Fog",
        "description": "fog",
        "icon": "50d"
    }],
    "base": "stations",
    "main": {
        "temp": 284.29,
        "feels_like": 283.95,
        "temp_min": 281.15,
        "temp_max": 287.04,
        "pressure": 1019,
        "humidity": 100
    },
    "visibility": 10000,
    "wind": {
        "speed": 1,
        "deg": 240
    },
    "clouds": {
        "all": 0
    },
    "dt": 1597983167,
    "sys": {
        "type": 1,
        "id": 9029,
        "country": "RU",
        "sunrise": 1597976020,
        "sunset": 1598028715
    },
    "timezone": 10800,
    "id": 524901,
    "name": "Moscow",
    "cod": 200
}