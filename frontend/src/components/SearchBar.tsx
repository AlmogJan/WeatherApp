type SearchBarProps = {
    setSearchCity: (value: React.SetStateAction<string>) => void,
    searchCity: string,
}
export function SearchBar({ setSearchCity, searchCity }: SearchBarProps) {
    return <div className="search-bar flex">
        <img src="./public/search.svg"></img>
        <input className="search-input" type="text" value={searchCity} onChange={(ev) => {
            const value = (ev.target as HTMLInputElement).value;
            setSearchCity(value)
        }} />
    </div>
}