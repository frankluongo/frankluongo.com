import React, { createContext, useContext, useReducer } from "react";
import { useLocalObjStore } from "../hooks/useLocalObjStore";

const LOCAL_STORAGE_KEY = "settings";

// ? Context Defaults:
// * ======================================================
const defaults = {
  darkMode: false,
  enableSounds: true,
  userInteracted: false,
};

// ? Settings Context
// * ======================================================
const SettingsContext = createContext(defaults);

// ? Settings Provider
// * ======================================================
export const SettingsProvider = ({ children }) => {
  const [startState, updateObj] = useLocalObjStore(LOCAL_STORAGE_KEY, defaults);
  // We've got to pass "updateObj" to our reducer
  const reducerFn = reducer.bind(null, updateObj);
  const [state, dispatch] = useReducer(reducerFn, startState);

  return (
    <SettingsContext.Provider value={{ state, dispatch }}>
      {children}
    </SettingsContext.Provider>
  );
};

// ? useSettings Hook
// * ======================================================
export const useSettings = () => useContext(SettingsContext);

// ? Reducer Actions
// * ======================================================
export const toggleDarkMode = "toggleDarkMode";
export const toggleSounds = "toggleSounds";
export const userInteracted = "userInteracted";

// ? Reducer Object
// * ======================================================
const actions = {
  [toggleDarkMode]: (state) => ({ ...state, darkMode: !state.darkMode }),
  [toggleSounds]: (state) => ({ ...state, enableSounds: !state.enableSounds }),
  [userInteracted]: (state) => ({ ...state, userInteracted: true }),
};

// ? Reducer Function
// * ======================================================
function reducer(updateObj, state, action) {
  if (!actions[action.type]) throw Error("Unknown Error");
  const newState = actions[action.type](state, action);
  // Update local storage
  // User interacted is always false in storage because it can only be true in the browser
  updateObj({ ...newState, userInteracted: false });
  // Update our App State
  return newState;
}
