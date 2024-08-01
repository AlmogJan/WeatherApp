export interface Weather {
    lon: number,
    lat: number,
    city: string,
    country: string,
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
    clouds: number
}
