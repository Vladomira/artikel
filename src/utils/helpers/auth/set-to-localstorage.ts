export const setToLocalStorage = (key: string, data: string) => {
    return localStorage.setItem(key, JSON.stringify(data));
};
