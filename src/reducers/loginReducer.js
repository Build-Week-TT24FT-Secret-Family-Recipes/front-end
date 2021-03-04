import {SET_LOGIN_VALUES, ON_SUCCESS,SET_LOGIN_ERROR, CLEAR_LOGIN_FORM} from '../actions/loginActions'

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
    case SET_LOGIN_ERROR:
        return {...state, error:payload}
    case CLEAR_LOGIN_FORM:
        return initialState
    default:
        return state
    }
}
export default loginReducer