export const FAILURE = "failure";
export const INITIAL = "initial";
export const LOADING = "loading";
export const SUCCESS = "success";

export const REFRESH_STATES = {
  [FAILURE]: {
    message: "Oh no! Something went wrong. Check the console for logs.",
    key: FAILURE,
  },
  [INITIAL]: { message: "", key: INITIAL },
  [LOADING]: { message: "Firing off request...", key: LOADING },
  [SUCCESS]: {
    message: "Success! The website will refresh soon",
    key: SUCCESS,
  },
};
