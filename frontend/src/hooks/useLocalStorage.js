import { useEffect, useState } from "react";

const useLocalStorage = (key) => {
  const initialValue = JSON.parse(localStorage.getItem(key));

  const [data, setData] = useState(initialValue || "");

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [data, key]);

  return [data, setData];
};

export default useLocalStorage;
