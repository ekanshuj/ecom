import { useEffect, useState } from 'react';

const useLocalStorage = (key, initialVal) => {
  const [val, setVal] = useState(() => {
    if (typeof window !== "undefined") {
      const jsonValue = localStorage.getItem(key);
      if (jsonValue != null) return JSON.parse(jsonValue)
    };

    if (typeof initialVal === "function") {
      return initialVal()
    } else {
      return initialVal
    };
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(val))
  }, [key, val])

  return [val, setVal];
};

export default useLocalStorage;