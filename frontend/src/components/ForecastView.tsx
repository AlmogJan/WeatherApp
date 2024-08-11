import { Forecast, ForecastData } from "../services/weather/weather.entity"
import { formatDate, formatHour } from "../utils/date.utils"
import { formatTemp, getIconUrl } from "../utils/weather.utils"

type ForecastProps = {
    forecast?: Forecast
}
export function ForecastView({ forecast }: ForecastProps) {
    return <div className="forecast-view">
        <div className="forecast-location">
            Forecast in <span>{forecast?.city.name}</span>,<span>{forecast?.city.country}</span>
        </div>
        <div className="forecast-container flex column">
            {forecast?.data.map((forecastData: ForecastData, index) => (
                <div key={index} className="forecast-node">
                    <div className="flex column">
                        <span>{formatDate(forecastData.date)}</span>
                        <span>{formatHour(forecastData.date)}</span>
                    </div>
                    <div className="flex align-center">
                        <span className="node-weather-desc">{forecastData.desc}</span>
                        <img src={getIconUrl(forecastData.icon)} alt="" />
                    </div>
                    <div>
                        <br />
                        <span>H: {formatTemp(forecastData.minTemp)}°</span>
                        <br />
                        <span>L: {formatTemp(forecastData.maxTemp)}°</span>
                    </div>
                    <br />
                </div>
            ))
            }
        </div >
    </div>

}

