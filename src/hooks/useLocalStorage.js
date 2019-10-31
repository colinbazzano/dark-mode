import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
        // we want to return the item after we have performed a JSON.parse(), otherwise return the initialValue
    });
    const setValue = value => {
        //save state
        setStoredValue(value);
        // save to local storage performed here
        window.localStorage.setItem(key, JSON.stringify(value));
    }
    return [storedValue, setValue];
    // we are returning storedValue and setValue, note that it is not returning setStoredValue in the return array.
};