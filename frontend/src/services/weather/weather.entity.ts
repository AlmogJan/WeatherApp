export interface Weather {
    currentWeather: CurrentWeather,
    forcast: Forecast,
}
export interface CurrentWeather {
    lon: number,
    lat: number,
    city: string,
    country: string,
    date: Date,
    mainDecs: string,
    desc: string,
    icon: string,
    currentTemp: number,
    feelsLike: number,
    minTemp: number,
    maxTemp: number,
    humidity: number,
    sunrise: Date,
    sunset: Date,
    visibility: number;
    windSpeed: number,
    clouds: number,
    pressure: number,
}

export interface Forecast {
    city: City,
    data: ForecastData[],

}

export interface City {
    name: string,
    country: string,
    timezone: number,
    sunrise: Date,
    sunset: Date
}

export interface ForecastData {
    date: Date,
    visibility: number,
    rainChancePct: number,
    rain3Hmm: number
    mainDesc: string,
    desc: string,
    icon: string,
    currentTemp: number,
    feelsLike: number,
    minTemp: number,
    maxTemp: number,
    humidity: number,
    pressure: number,
    windSpeed: number,
    clouds: number,
}