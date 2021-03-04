import axios from 'axios'
export const SET_ERROR = "SET_ERROR";
export const SET_VALUES = "SET_VALUES";
export const SET_DISABLED = "SET_DISABLED";
export const setValues = (value,name) => {
  return { type: SET_VALUES, payload: { name: name, value: value } };
};
export const setDisabled = (disabled) => {
  return { type: SET_DISABLED, payload: disabled };
};
export const signUpSubmit = (username,password, email) => {
  return dispatch => {
    axios
    .post(
        "https://tttwentyfour-foundation.herokuapp.com/users/user",
        `grant_type=password&username=${username}&password=${password}&email=${email}`,
        {
            headers: {
                // btoa is converting our client id/client secret into base64
                Authorization: `Basic ${btoa("lambda-client:lambda-secret")}`,
                "Content-Type": "application/x-www-form-urlencoded",
            },
        },
    )
    .then((res) => {
        console.log(res.data);
        // history.push("/login");
    })
    .catch((err) => {
        console.log(err.response.data.error_description)
        dispatch({type:SET_ERROR, payload:err.response.data.error_description})
    })
}
};
export const setErrors = (name, error) => {
    return {type:SET_ERROR, payload:{name:name, error:error}}
}