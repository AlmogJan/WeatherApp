import { OpenWeatherDto } from "../../providers/open-weather/open-weather.dto";
import { openWeatherProvider } from "../../providers/open-weather/open-weather.provider"
import { Weather } from "./weather.entity";

export const weatherService = {
    getWeather
}

async function getWeather(lat: number = 32.011261, lon: number = 34.774811): Promise<Weather> {
    return toWeatherEntity(await openWeatherProvider.getWeather(lat, lon));
}

function toWeatherEntity(weatherDto: OpenWeatherDto): Weather {
    console.log(weatherDto);

    return {
        lon: weatherDto.coord.lon,
        lat: weatherDto.coord.lat,
        city: weatherDto.name,
        country: weatherDto.sys.country,
        humidity: weatherDto.main.humidity,
        sunrise: new Date(weatherDto.sys.sunrise * 1000),
        sunset: new Date(weatherDto.sys.sunset * 1000),
        visibility: weatherDto.visibility,
        desc: weatherDto.weather[0].description,
        icon: weatherDto.weather[0].icon,
        currentTemp: weatherDto.main.temp,
        maxTemp: weatherDto.main.temp_max,
        minTemp: weatherDto.main.temp_min,
        feelsLike: weatherDto.main.feels_like,
        windSpeed: weatherDto.wind.speed,
        clouds: weatherDto.clouds.all,
    }
}