import { useState, useEffect, useCallback } from "react";
import { weatherService } from "./services/weather/weather.service";
import { Weather } from "./services/weather/weather.entity";
import { Header } from "./components/Header";
import { CurrentWeatherView } from "./components/CurrentWeatherView";
import { locationService } from "./services/location/location.service";
import { ForecastView } from "./components/ForecastView";
import { debounce } from "lodash";

export function App() {
  //fetched data
  const [data, setData] = useState<Weather>();
  //local search data
  const [searchCity, setSearchCity] = useState<string>("holon")
  const [selectedComponent, setSelectedComponent] = useState<'weather' | 'forecast'>('weather');
  const handleSearch = useCallback(
    debounce((city: string) => {
      if (city && city !== "") {
        loadWeather(city)
      }
    }, 500), []);

  useEffect(() => {
    handleSearch(searchCity)
  }, [searchCity])

  async function loadWeather(city: string) {
    const location = await locationService.getLocation(city);
    setData(await weatherService.getWeather(location?.lat, location?.lon))
  }

  return <div className="app">
    <Header currentWeather={data?.currentWeather} setSearchCity={setSearchCity} searchCity={searchCity} />
    <div className="radio-btns-container flex align-center">
      <div className="btn-container flex align-center">
        <input
          className="radio"
          type="radio"
          id="weather"
          value="weather"
          name="component"
          checked={selectedComponent === 'weather'}
          onChange={() => setSelectedComponent('weather')}
        />
        <span className="checkmark">
          <img src="./public/weather.svg" alt="" />
        </span>
        <label htmlFor="weather">Weather</label>
      </div>
      <div className="btn-container flex align-center">
        <input
          className="radio"
          type="radio"
          id="forecast"
          value="forecast"
          name="component"
          checked={selectedComponent === 'forecast'}
          onChange={() => setSelectedComponent('forecast')}
        />
        <span className="checkmark">
          <img src="./public/forecast.svg" alt="" />
        </span>
        <label htmlFor="forecast">Forecast</label>
      </div>
    </div>
    {selectedComponent === 'weather' && (
      <CurrentWeatherView currentWeather={data?.currentWeather} />
    )}
    {selectedComponent === 'forecast' && (
      <ForecastView forecast={data?.forcast} />
    )}
  </div >
}


