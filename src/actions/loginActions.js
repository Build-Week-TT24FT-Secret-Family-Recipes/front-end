import axios from 'axios'
export const SET_LOGIN_VALUES = "SET_LOGIN_VALUES";
export const SET_TOKEN = 'SET_TOKEN'
export const setLoginValues = (value,name) => {
  return { type: SET_LOGIN_VALUES, payload: { name: name, value: value } };
};
export const login = (username,password, history) => {
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
            console.log(res.data);
            localStorage.setItem("token", res.data.access_token);
            dispatch({type:SET_TOKEN})
            history.push("/home");
        })
        .catch((err) => {
            console.log(err.response.data.error_description)
        })
    }
}
export const signUpSubmit = (e) => {
  e.preventDefault();
};