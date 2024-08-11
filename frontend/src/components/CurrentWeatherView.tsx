import { CurrentWeather } from "../services/weather/weather.entity";
import { formatTemp, getIconUrl } from "../utils/weather.utils";

type CurrentWeatherProps = {
    currentWeather?: CurrentWeather
}
export function CurrentWeatherView({ currentWeather }: CurrentWeatherProps) {
    if (!currentWeather) {
        return <div>loading</div>
    }

    return (
        <div className="curr-weather-container flex space-between ">
            <div className="main-desc-container flex column">
                <h3 className="primary-text">{currentWeather.mainDecs}</h3>
                <div className="desc-container flex  align-center">
                    <p className="secondary-text">{currentWeather.desc}</p>
                    <img className="weather-icon" src={getIconUrl(currentWeather.icon)} alt="" />
                </div>
                <div className="info-box-container">
                    <div className="info-box">
                        <span className="parameter">{currentWeather.windSpeed} <span className="measure">km/h</span></span>
                        <span className="parameter-name">Wind</span>
                    </div>
                    <div className="info-box">
                        <span className="parameter">{currentWeather.clouds} <span className="measure">%</span></span>
                        <span className="parameter-name">Clouds</span>
                    </div>
                    <div className="info-box">
                        <span className="parameter">{currentWeather.pressure} <span className="measure">hPa</span></span>
                        <span className="parameter-name">Pressure</span>
                    </div>
                </div>
                <div className="info-line-container">
                    <p className="info-line">Humidity: {currentWeather.humidity}%</p>
                    <p className="info-line">Visibility: {currentWeather.visibility / 1000} Km</p>
                </div>

            </div>
            <div className="temp-container">
                <h3 className="curr-temp">{formatTemp(currentWeather.currentTemp)}°</h3>
                <p className="secondary-text info-box">{currentWeather.city} ,{currentWeather.country}</p>
                <p className="info-line">Feels like: {formatTemp(currentWeather.feelsLike)}°</p>
                <p className="info-line">H: {formatTemp(currentWeather.minTemp)}°  L: {formatTemp(currentWeather.maxTemp)}°</p>
            </div>
        </div >
    );

}