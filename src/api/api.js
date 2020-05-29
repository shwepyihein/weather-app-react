import React from 'react';

export const apicity =async (city)=>{    
    return await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=da6c840b7ddc60d78c05ab45f9f4761b`)
    .then(res=>res.json())
    .then(data=>data)          
  }
  

  export const apiPosition = async (lat, lon) => {
    const api = "https://fcc-weather-api.glitch.me/api/current?";
    const response = await fetch(`${api + lat}&${lon}`);
    return response;
  };