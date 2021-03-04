import {combineReducers} from 'redux'
import homePageReducer from './homePageReducer'
import loginReducer from './loginReducer';
import signUpReducer from './signUpReducer'

export default combineReducers({
    homepage: homePageReducer,
    signup: signUpReducer,
    login: loginReducer
   });