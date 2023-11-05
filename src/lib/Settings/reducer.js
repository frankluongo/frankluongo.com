export const TOGGLE_DARK_MODE = "toggleDarkMode";
export const TOGGLE_SOUNDS = "toggleSounds";
export const USER_INTERACTED = "userInteracted";

const actions = {
  [TOGGLE_DARK_MODE]: (state) => ({ ...state, darkMode: !state.darkMode }),
  [TOGGLE_SOUNDS]: (state) => ({ ...state, enableSounds: !state.enableSounds }),
  [USER_INTERACTED]: (state) => ({ ...state, userInteracted: true }),
};

export default function reducer(updateObj, state, action) {
  if (!actions[action.type]) throw Error("Unknown Error");
  const newState = actions[action.type](state, action);
  // Update local storage
  // User interacted is always false in storage because it can only be true in the browser
  updateObj({ ...newState, userInteracted: false });
  // Update our App State
  return newState;
}
