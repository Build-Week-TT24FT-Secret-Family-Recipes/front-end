import {SET_LOGIN_VALUES} from '../actions/loginActions'


const initialState = {
    username:'',
    password:''
}

const loginReducer =(state = initialState, { type, payload }) => {
    switch (type) {
    case SET_LOGIN_VALUES:
        return {...state, [payload.name] : payload.value}
    default:
        return state
    }
}
export default loginReducer