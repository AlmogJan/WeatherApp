export function formatHour(date: Date): string {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })
}

export function formatDate(date: Date): string {
    return date.toLocaleDateString([], {
        day: "numeric", month: "short", year: "numeric"
    })
}
