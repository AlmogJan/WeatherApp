import { ForecastDto, List } from "../../providers/forecast/forecast.dto";
import { forecastProvider } from "../../providers/forecast/forecast.provider";
import { OpenWeatherDto } from "../../providers/open-weather/open-weather.dto";
import { openWeatherProvider } from "../../providers/open-weather/open-weather.provider"
import { CurrentWeather, Forecast, ForecastData, Weather } from "./weather.entity";

export const weatherService = {
    getWeather
}

async function getWeather(lat: number = 32.011261, lon: number = 34.774811): Promise<Weather> {
    let weather = await openWeatherProvider.getWeather(lat, lon)
    let forecast = await forecastProvider.getForecast(lat, lon)
    return getWeatherFromDto(weather, forecast);
}

function getWeatherFromDto(openWeatherDto: OpenWeatherDto, forecastDto: ForecastDto): Weather {
    return {
        currentWeather: toWeatherEntity(openWeatherDto),
        forcast: toForecastEntity(forecastDto)
    }
}

function toWeatherEntity(weatherDto: OpenWeatherDto): CurrentWeather {
    console.log(weatherDto);

    return {
        lon: weatherDto.coord.lon,
        lat: weatherDto.coord.lat,
        city: weatherDto.name,
        country: weatherDto.sys.country,
        date: new Date(weatherDto.dt * 1000),
        humidity: weatherDto.main.humidity,
        sunrise: new Date(weatherDto.sys.sunrise * 1000),
        sunset: new Date(weatherDto.sys.sunset * 1000),
        visibility: weatherDto.visibility,
        mainDecs: weatherDto.weather[0].main,
        desc: weatherDto.weather[0].description,
        icon: weatherDto.weather[0].icon,
        currentTemp: weatherDto.main.temp,
        maxTemp: weatherDto.main.temp_max,
        minTemp: weatherDto.main.temp_min,
        feelsLike: weatherDto.main.feels_like,
        windSpeed: weatherDto.wind.speed,
        clouds: weatherDto.clouds.all,
        pressure: weatherDto.main.pressure,
    }
}

function toForecastEntity(forecastDto: ForecastDto): Forecast {
    return {
        city: {
            name: forecastDto.city.name,
            country: forecastDto.city.country,
            timezone: forecastDto.city.timezone,
            sunrise: new Date(forecastDto.city.sunrise * 1000),
            sunset: new Date(forecastDto.city.sunset * 1000),
        },
        data: getForecastData(forecastDto)
    }
}

function getForecastData(forecastDto: ForecastDto): ForecastData[] {
    return forecastDto.list.map((listNode: List) => ({
        date: new Date(listNode.dt * 1000),
        visibility: listNode.visibility,
        rainChancePct: listNode.pop,
        rain3Hmm: listNode.rain && listNode.rain["3h"],
        mainDesc: listNode.weather[0].main,
        desc: listNode.weather[0].description,
        icon: listNode.weather[0].icon,
        currentTemp: listNode.main.temp,
        feelsLike: listNode.main.feels_like,
        minTemp: listNode.main.temp_min,
        maxTemp: listNode.main.temp_max,
        humidity: listNode.main.humidity,
        pressure: listNode.main.pressure,
        windSpeed: listNode.wind.speed,
        clouds: listNode.clouds.all,
    } as ForecastData));
}