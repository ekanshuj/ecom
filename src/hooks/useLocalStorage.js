import { useState, useEffect } from 'react';

const useLocalStorage = (key, initialVal) => {
  const [val, setVal] = useState(() => {
    if (typeof window === "undefined") return initialVal;

    const jsonVal = window.localStorage.getItem(key);
    if (jsonVal !== null) return JSON.parse(jsonVal);

    if (initialVal instanceof Function) return initialVal();
    return initialVal;

  });

  useEffect(() => {
    if (val === undefined) return window.localStorage.removeItem(key);
    window.localStorage.setItem(key, JSON.stringify(val))
  }, [key, val]);

  return [val, setVal];
};

export default useLocalStorage;