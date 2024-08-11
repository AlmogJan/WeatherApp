import { Clouds, Coord, Main, Weather, Wind } from "../common.dto"

export interface ForecastDto {
    cod: string
    message: number
    cnt: number
    list: List[]
    city: City
}

export interface List {
    dt: number
    main: Main
    weather: Weather[]
    clouds: Clouds
    wind: ForecastWind
    visibility: number
    pop: number
    rain?: Rain
    sys: Sys
    dt_txt: string
}

export type ForecastMain = Main & {
    temp_kf: number
}


export type ForecastWind = Wind & {
    gust: number
}

export interface Rain {
    "3h": number
}

export interface Sys {
    pod: string
}

interface City {
    id: number
    name: string
    coord: Coord
    country: string
    population: number
    timezone: number
    sunrise: number
    sunset: number
}


