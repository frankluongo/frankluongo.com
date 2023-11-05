export default function useLocalStore(key, initial) {
  const storedValue = getInitial();

  return [storedValue, updateObj];

  function getInitial() {
    if (typeof window === "undefined") return initial;
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
      if (typeof window === "undefined") return;
      window.localStorage.setItem(key, JSON.stringify(obj));
    } catch (e) {
      console.error(e);
    }
  }
}
