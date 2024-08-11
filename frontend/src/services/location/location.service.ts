import { LocationDto } from "../../providers/location/location.dto";
import { locationProvider } from "../../providers/location/location.provider";
import { Location } from "./location.entity";

export const locationService = {
    getLocation
}
async function getLocation(cityName: string): Promise<Location> {
    let location = await locationProvider.getLocation(cityName);
    console.log(location);
    return toLocationEntity(location);
}

function toLocationEntity(locationDto: LocationDto): Location {
    console.log(locationDto);

    let locationData = {
        name: locationDto[0].name,
        lat: locationDto[0].lat,
        lon: locationDto[0].lon,
        country: locationDto[0].country,
        state: locationDto[0].state
    }
    console.log(locationData);
    return locationData;
}
