export const setToStorage = (key: string, value: any) => { localStorage.setItem(key, JSON.stringify(value)) }

export const getFromStorage = (key: string) => {
    try { return JSON.parse(localStorage.getItem(key) as string) }
    catch { return null }
}
