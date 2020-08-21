# Weather lookup using Typescript
Author: David Lai

# Getting started
1. Clone this repo.
2. run `npm install` to install dependencies.
3. Get an Open Weather API key from: https://openweathermap.org/ then copy `.env.sample` to `.env` and replace the API key
4. run `npm run weather "Name of City"|ZIP_CODE` ex: `npm run weather "Los Angeles" "Tokyo" 90210`
You should get an output of the weather data and time at location.
```
dlai@MacBook-Pro invisible % npm run weather "Los Angeles" "Tokyo" 90210

> ts-node index.ts "Los Angeles" "Tokyo" "90210"


                location: Los Angeles 
                time: 17:24 (Los Angeles)
                clear sky
                temperature: 74.05 F°,
                humidity: 65
                pressure: 1007
            

                location: Tokyo 
                time: 17:24 (Tokyo)
                few clouds
                temperature: 96.57 F°,
                humidity: 59
                pressure: 1011
            

                location: 90210 
                time: 17:24 (Beverly Hills)
                clear sky
                temperature: 74.19 F°,
                humidity: 88
                pressure: 1008
            
```
