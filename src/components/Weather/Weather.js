import React, { useState, useEffect } from "react";
import axios from "axios";
import pix from "../../img/cloud.jpg";

const Weather = () => {
  const [search, setSearch] = useState("Lagos");
  const [weather, setWeather] = useState([]);

  const fetchWeather = async (e) => {
    const API_KEY = "36e166465dbd63c7d02282ffb365ef12";
    const res = await axios(
      `http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=36e166465dbd63c7d02282ffb365ef12`
    );

    console.log(res.data);
    if (res.data) {
      return setWeather(res.data);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);
  return (
    <>
      <aside>
        <input
          placeholder="Enter a city"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={fetchWeather}>Search</button>
      </aside>
      <aside>
        The Weather App
        <img src={pix} />
        <p>Temp: {weather.main.temp} </p>
        <p>Pres: {weather.main.pressure}</p>
        <p>Cond: {weather.weather[0].main}</p>
      </aside>
    </>
  );
};
export default Weather;
