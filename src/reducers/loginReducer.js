import {SET_LOGIN_VALUES, SET_TOKEN} from '../actions/loginActions'


const initialState = {
    username:'',
    password:'',
    token:false
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