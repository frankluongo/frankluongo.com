import { useState } from "react";

export function useLocalStore(key, initial) {
  const [storeValue, setStateValue] = useState(getInitial());

  return [storeValue, setValue, setStateValue];

  function getInitial() {
    if (typeof window === "undefined") return initial;
    try {
      const item = window.localStorage.getItem(key);
      if (!item) return initial;
      return item;
    } catch (error) {
      console.log(error);
      return initial;
    }
  }

  function setValue(value) {
    try {
      setStateValue(value);
      if (typeof window === "undefined") return;
      window.localStorage.setItem(key, value);
    } catch (error) {
      console.log(error);
    }
  }
}
