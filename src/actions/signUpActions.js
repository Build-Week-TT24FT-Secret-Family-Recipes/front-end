
export const SET_ERROR = "SET_ERROR";
export const SET_VALUES = "SET_VALUES";
export const SET_DISABLED = "SET_DISABLED";
export const setValues = (value,name) => {
  return { type: SET_VALUES, payload: { name: name, value: value } };
};
export const setDisabled = (disabled) => {
  return { type: SET_DISABLED, payload: disabled };
};
export const signUpSubmit = (e) => {
  e.preventDefault();
};
export const setErrors = (name, error) => {
    return {type:SET_ERROR, payload:{name:name, error:error}}
}