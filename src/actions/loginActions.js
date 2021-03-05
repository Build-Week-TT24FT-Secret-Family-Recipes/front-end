import axios from 'axios'
export const SET_LOGIN_VALUES = "SET_LOGIN_VALUES";
export const SET_LOGIN_ERROR = "SET_LOGIN_ERROR"
export const ON_SUCCESS = 'ON_SUCCESS'
export const CLEAR_LOGIN_FORM = "CLEAR_LOGIN_FORM"
export const setLoginValues = (value,name) => {
  return { type: SET_LOGIN_VALUES, payload: { name: name, value: value } };
};
export const login = (username,password, push) => {
    return dispatch => {
        axios
        .post(
            "https://tttwentyfour-foundation.herokuapp.com/login",
            `grant_type=password&username=${username}&password=${password}`,
            {
                headers: {
                    // btoa is converting our client id/client secret into base64
                    Authorization: `Basic ${btoa("lambda-client:lambda-secret")}`,
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            },
        )
        .then((res) => {
            localStorage.setItem("token", res.data.access_token);
            dispatch({type:ON_SUCCESS})
            push("/");
        })
        .catch((err) => {
            console.log(err.response.data.error_description)
            dispatch({type:SET_LOGIN_ERROR, payload:err.response.data.error_description})
        })
    }
}
export const clearLoginForm = () => {
    return {type:CLEAR_LOGIN_FORM}
}