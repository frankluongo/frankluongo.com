import React, { createContext, useContext, useReducer } from "react";
import useLocalStore from "./useLocalStore";
import reducer from "./reducer";

const LOCAL_STORAGE_KEY = "settings";

const defaults = {
  darkMode: false,
  enableSounds: true,
  userInteracted: false,
};

const SettingsContext = createContext(defaults);

export const SettingsProvider = ({ children }) => {
  const [startState, updateObj] = useLocalStore(LOCAL_STORAGE_KEY, defaults);
  // We've got to pass "updateObj" to our reducer
  const reducerFn = reducer.bind(null, updateObj);
  const [state, dispatch] = useReducer(reducerFn, startState);

  return (
    <SettingsContext.Provider value={{ state, dispatch }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);
