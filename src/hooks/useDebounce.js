import { useEffect, useState } from 'react';

const useDebounce = (value, delay) => {
  const [val, setVal] = useState("");
  useEffect(() => {
    const handler = setTimeout(() => {
      setVal(value)
    }, delay);
    return () => {
      clearTimeout(handler)
    };
  }, [value, delay]);
  return val;
};

export default useDebounce;