import React from 'react';

     function WeatherDisplay({ weatherData }) {
       if (!weatherData) return null;

       const { name, main, weather } = weatherData;
       return (
         <div className="weather-display">
           <h2>{name}</h2>
           <p>Temperature: {main.temp}°C</p>
           <p>Humidity: {main.humidity}%</p>
           <p>Condition: {weather[0].description}</p>
         </div>
       );
     }

     export default WeatherDisplay;