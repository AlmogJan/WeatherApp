import axios from "axios"
import { LocationDto } from "./location.dto"

export const locationProvider = {
    getLocation
}

async function getLocation(cityName: string): Promise<LocationDto> {
    const result = await axios.get<LocationDto>(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=5e54e3745bdc909777aeb27aab9b64fe`)
    return result.data
}