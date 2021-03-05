import axios from 'axios'
export const SET_ERROR = "SET_ERROR";
export const SET_VALUES = "SET_VALUES";
export const SET_DISABLED = "SET_DISABLED";
export const CLEAR_FORM = 'CLEAR_FORM'
export const setValues = (value,name) => {
  return { type: SET_VALUES, payload: { name: name, value: value } };
};
export const setDisabled = (disabled) => {
  return { type: SET_DISABLED, payload: disabled };
};
export const signUpSubmit = (username,password, email, push) => {
  return dispatch => {
    axios
    .post(
        "https://tttwentyfour-foundation.herokuapp.com/createnewuser",
        {username:username, password:password, primaryemail:email})
    .then((res) => {
        push("/login");
    })
    .catch((err) => {
        console.log(err.response)
        dispatch({type:SET_ERROR, payload:err.response.data.error_description})
    })
}
};
export const setErrors = (name, error) => {
    return {type:SET_ERROR, payload:{name:name, error:error}}
}
export const clearForm = () => {
  return {type:CLEAR_FORM}
}