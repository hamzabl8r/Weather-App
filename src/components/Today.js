import React from "react";
import { WiHumidity } from 'react-icons/wi';

const Today = ({ weather, loading, error }) => {
  if (loading) {
    return <div className="weather-message">Loading weather data...</div>;
  }

  if (error) {
    return <div className="weather-error">Error: {error.message}</div>;
  }

  if (!weather) {
    return <div className="weather-message" >Enter a city to get weather information.</div>;
  }

  const { main, weather: weatherDetails, sys, wind } = weather;
  const temperature = Math.round(main.temp);
  const description = weatherDetails[0].description;
  const iconCode = weatherDetails[0].icon;
  const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
  const cityName = weather.name;
  const country = sys.country;


  return (
    <>
      <div className="current-weather-info">
        <div className="weather-description">
          <h2 className="weather-city">{cityName}, {country}</h2>
          <div className="weather-temp">{temperature}°C <span className="Desc">  <img src={iconUrl} alt={description} className="weather-icon" /></span></div>
        </div>
        </div>
        <div className="weather-details">
        <div className="weather-day-hour">
          <h1 className="Day">
            {new Date().toLocaleDateString("en-US", { 
              weekday: "long" ,
              day: "2-digit",
              month: "numeric",
              year: "numeric",
            })}
          </h1>
          <h2 className="Date">
            {new Date().toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false
            })}
          </h2></div>
          <div className="">
          <p>
            Min: {Math.round(main.temp_min)}°C <br/>
            Max:{" "}
            {Math.round(main.temp_max)}°C
          </p></div>
          <div className="weather-humidity-speed">
          <p className="weather-humidity">Humidity <WiHumidity /> : {main.humidity}%</p>
        <p className="weather-wind">Wind Speed: {wind.speed} m/s</p>
        </div>
      </div>

    </>
  );
};

export default Today;