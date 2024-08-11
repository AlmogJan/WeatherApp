import axios from "axios"
import { ForecastDto } from "./forecast.dto"

export const forecastProvider = {
    getForecast
}

async function getForecast(lat: number, lon: number): Promise<ForecastDto> {
    const result = await axios.get<ForecastDto>(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=5e54e3745bdc909777aeb27aab9b64fe`)
    return result.data
}