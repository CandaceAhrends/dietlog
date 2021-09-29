const DIARY_STATE = "diarystate";

export const saveSessionData = (sessionData) => {
  window.sessionStorage.setItem(DIARY_STATE, JSON.stringify(sessionData));
};
export const getSessionData = () => {
  return JSON.parse(window.sessionStorage.getItem(DIARY_STATE) || "{}");
};
