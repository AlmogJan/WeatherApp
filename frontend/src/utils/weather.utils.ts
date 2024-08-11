export function formatTemp(temp: number): number {
    return Math.floor(temp)
}

export function getIconUrl(icon: string) {
    return `http://openweathermap.org/img/w/${icon}.png`;
}