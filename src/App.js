import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import Search from "./components/Search";
import Today from "./components/Today";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (city) => {
    setLoading(true);
    setError(null);
    setWeatherData(null);

    try {
      const API_KEY = "fe3185c0fecb2cb7549d00e5831c9b41";
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeatherData(response.data);
    } catch (err) {
      console.error("Error fetching weather:", err);
      if (axios.isAxiosError(err) && err.response) {
        setError(
          new Error(
            `City not found or API error: ${
              err.response.data.message || err.response.statusText
            }`
          )
        );
      } else if (err.request) {
        setError(
          new Error(
            "Network error: No response received from server. Please check your internet connection."
          )
        );
      } else {
        setError(new Error(`An unexpected error occurred: ${err.message}`));
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container">
        <div className="box">
          <div className="top">
            <Search onSearch={handleSearch} />
          </div>
          <div className="middle">
            <Today weather={weatherData} loading={loading} error={error} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
