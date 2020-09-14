# Weather lookup using Typescript
Author: David Lai

# Getting started
1. Clone this repo.
2. run `npm install` to install dependencies.
3. Get an Open Weather API key from: https://openweathermap.org/ then copy `.env.sample` to `.env` and replace the API key
4. run `npm run weather "Name of City"|ZIP_CODE` ex: `npm run weather "Los Angeles" "Tokyo" 90210`
You should get an output of the weather data and time at location.
```
dlai@MacBook-Pro weather % npm run weather "Los Angeles" "Tokyo" 90210

> ts-node index.ts "Los Angeles" "Tokyo" "90210"

                location: Los Angeles 
                time: 07:57 (Los Angeles)
                haze
                temperature: 62.60 F°,
                humidity: 77
                pressure: 1014
            

                location: Tokyo 
                time: 23:57 (Tokyo)
                broken clouds
                temperature: 73.44 F°,
                humidity: 88
                pressure: 1013
            

                location: 90210 
                time: 07:57 (Beverly Hills)
                mist
                temperature: 62.60 F°,
                humidity: 88
                pressure: 1015
            
```

# Available commands
* `npm run weather <location1> <location2> ...` - Get the weather for those locations.  Location can be a City in quotes, ex: `"Los Angeles"` or a US zip code `90210`
* `npm run weather:debug <location1> <location2> ...` - Run get weather with node debugger enabled.
* `npm test` - Run unit tests
