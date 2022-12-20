// import { useState } from "react";
import { isBrowser } from "../helpers/isBrowser";

export function useLocalObjStore(key, initial) {
  // const [storedValue, setStoredValue] = useState(getInitial());
  const storedValue = getInitial();

  return [storedValue, updateObj];

  function getInitial() {
    if (!isBrowser) return initial;
    try {
      const obj = window.localStorage.getItem(key);
      if (!obj) return initial;
      return JSON.parse(obj);
    } catch (error) {
      console.log(error);
      return initial;
    }
  }

  function updateObj(obj) {
    try {
      if (!isBrowser) return;
      // setStoredValue(obj);
      window.localStorage.setItem(key, JSON.stringify(obj));
    } catch (e) {
      console.error(e);
    }
  }
}
