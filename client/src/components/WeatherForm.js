import React, { useState } from 'react';
     import axios from 'axios';

     function WeatherForm({ setWeatherData }) {
       const [city, setCity] = useState('');

       const handleSubmit = async (e) => {
         e.preventDefault();
         try {
           const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/weather/${city}`);
           setWeatherData(response.data);
           setCity('');
         } catch (error) {
           console.error('Error fetching weather:', error);
           alert('City not found!');
         }
       };

       return (
         <form onSubmit={handleSubmit}>
           <input
             type="text"
             value={city}
             onChange={(e) => setCity(e.target.value)}
             placeholder="Enter city"
             required
           />
           <button type="submit">Get Weather</button>
         </form>
       );
     }

     export default WeatherForm;