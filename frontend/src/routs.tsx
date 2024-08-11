import { createBrowserRouter } from "react-router-dom"
import { CurrentWeatherView } from "./components/CurrentWeatherView"
import { ForecastView } from "./components/ForecastView"
export const appRoutes = createBrowserRouter([

    { path: "/", element: <CurrentWeatherView /> },
    { path: "/forecast", element: <ForecastView /> }

])
