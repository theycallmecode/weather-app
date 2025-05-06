import React, { useState } from 'react';
     import './App.css';
     import WeatherForm from './components/WeatherForm';
     import WeatherDisplay from './components/WeatherDisplay';
     import SearchHistory from './components/SearchHistory';

     function App() {
       const [weatherData, setWeatherData] = useState(null);

       return (
         <div className="App">
           <h1>Weather Dashboard</h1>
           <WeatherForm setWeatherData={setWeatherData} />
           <WeatherDisplay weatherData={weatherData} />
           <SearchHistory />
         </div>
       );
     }

     export default App;