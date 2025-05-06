import React, { useState, useEffect } from 'react';
     import axios from 'axios';

     function SearchHistory() {
       const [history, setHistory] = useState([]);

       useEffect(() => {
         const fetchHistory = async () => {
           try {
             const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/history`);
             setHistory(response.data);
           } catch (error) {
             console.error('Error fetching history:', error);
           }
         };
         fetchHistory();
       }, []);

       return (
         <div className="search-history">
           <h3>Recent Searches</h3>
           <ul>
             {history.map((item) => (
               <li key={item._id}>{item.city} - {new Date(item.timestamp).toLocaleString()}</li>
             ))}
           </ul>
         </div>
       );
     }

     export default SearchHistory;