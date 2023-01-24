import React, { useEffect, useState } from 'react';

export default useDebounce = (value, delay) => {
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
}