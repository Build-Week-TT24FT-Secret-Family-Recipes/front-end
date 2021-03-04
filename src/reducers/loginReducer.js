import {SET_LOGIN_VALUES, ON_SUCCESS} from '../actions/loginActions'
import {SET_ERROR} from '../actions/signUpActions'

const initialState = {
    username:'',
    password:'',
    error:'',
    token:false
}

const loginReducer = (state = initialState, { type, payload }) => {
    switch (type) {
    case SET_LOGIN_VALUES:
        return {...state, [payload.name] : payload.value}
    case ON_SUCCESS:
        return {...initialState, token:true}
    case SET_ERROR:
        return {...state, error:payload}
    default:
        return state
    }
}
export default loginReducer