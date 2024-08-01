import { useState, useEffect } from "react";
import { weatherService } from "./services/weather/weather.service";
import { Weather } from "./services/weather/weather.entity";

export function App() {
  const [weather, setWeather] = useState<Weather>();

  useEffect(() => {
    loadWeather()
  }, []);

  useEffect(() => {
    console.log(weather);
  }, [weather])

  async function loadWeather() {
    setWeather(await weatherService.getWeather())
  }
  if (!weather) {
    return <div>loading</div>
  }
  let iconUrl = `http://openweathermap.org/img/w/${weather.icon}.png`;

  return (
    <div className="App">
      <div className="large-weather-feild">
        <h3>{weather.currentTemp}°</h3>
        <img src={iconUrl} alt="" />
        <p>{weather.city} ,{weather.country}</p>
        <p>{weather.desc}</p>
        <p>H: {Math.floor(weather.minTemp)}°  L: {Math.floor(weather.maxTemp)}°</p>
      </div>
      <div className="small-weather-feild">
        <p>Feels like {weather.feelsLike}°</p>
      </div>
      <div className="small-weather-feild">
        <p>Humidity: {weather.humidity}%</p>
      </div>
      <div className="small-weather-feild">
        <p>Wind: {weather.windSpeed} km/h</p>
      </div>
      <div className="small-weather-feild">
        <p>Visibility: {weather.visibility / 1000} Km</p>
      </div>
      <div className="small-weather-feild">
        <p>Clouds: {weather.clouds} %</p>
      </div>
      <div className="small-weather-feild">
        <p>sunrise: {weather.sunrise.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
        <p>sunset: {weather.sunset.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
      </div>
    </div>
  );
}