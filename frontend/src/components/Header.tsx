import { CurrentWeather } from "../services/weather/weather.entity"
import { formatDate, formatHour } from "../utils/date.utils"
import { SearchBar } from "./SearchBar"

type HeaderProps = {
    currentWeather?: CurrentWeather
    setSearchCity: (value: React.SetStateAction<string>) => void,
    searchCity: string
}
export function Header({ currentWeather, setSearchCity, searchCity }: HeaderProps) {
    if (!currentWeather) {
        return <div><div className=""></div></div>
    }
    return <div className="header flex space-between align-center">
        <div className="current-time-container">
            <p>{formatDate(currentWeather?.date)}</p>
            <p>{formatHour(currentWeather?.date)}</p>
        </div>
        <SearchBar setSearchCity={setSearchCity} searchCity={searchCity} />
        <div className="devided-info-container flex">
            <div className="devided-info-cell flex column ">
                <span>Sunrise</span>
                <span>{formatHour(currentWeather.sunrise)}</span>
            </div>
            <div className="devided-info-cell flex column">
                <span>Sunset</span>
                <span>{formatHour(currentWeather.sunset)}</span>
            </div>
        </div>

    </div>

}