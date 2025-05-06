const express = require('express');
     const axios = require('axios');
     const Search = require('../models/Search');
     const router = express.Router();

     // Fetch weather data
     router.get('/weather/:city', async (req, res) => {
       const { city } = req.params;
       try {
         const response = await axios.get(
           `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPENWEATHER_API_KEY}&units=metric`
         );
         const search = new Search({ city });
         await search.save();
         res.json(response.data);
       } catch (error) {
         res.status(500).json({ error: 'Error fetching weather data' });
       }
     });

     // Get search history
     router.get('/history', async (req, res) => {
       try {
         const history = await Search.find().sort({ timestamp: -1 }).limit(10);
         res.json(history);
       } catch (error) {
         res.status(500).json({ error: 'Error fetching history' });
       }
     });

     module.exports = router;