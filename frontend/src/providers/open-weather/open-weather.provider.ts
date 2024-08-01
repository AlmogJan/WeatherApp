import axios from "axios"
import { OpenWeatherDto } from "./open-weather.dto"

export const openWeatherProvider = {
    getWeather
}

async function getWeather(lat: number, lon: number): Promise<OpenWeatherDto> {
    const result = await axios.get<OpenWeatherDto>(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=5e54e3745bdc909777aeb27aab9b64fe`)
    return result.data
}