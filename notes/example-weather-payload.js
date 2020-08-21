// Example Payload from weather service
// http://api.openweathermap.org/data/2.5/weather?q=Los%20Angeles&appid=APP_ID

const response = {
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
