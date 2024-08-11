import { Clouds, Coord, Main, Weather, Wind } from "../common.dto";

export interface OpenWeatherDto {
    coord: Coord;
    weather: Weather[];
    base: string;
    main: Main;
    visibility: number;
    wind: Wind;
    clouds: Clouds;
    dt: number;
    sys: Sys;
    timezone: number;
    id: number;
    name: string;
    cod: number;
}
interface Sys {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
}



