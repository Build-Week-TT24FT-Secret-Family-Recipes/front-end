import {combineReducers} from 'redux'
import homePageReducer from './homePageReducer'
import loginReducer from './loginReducer';
import signUpReducer from './signUpReducer'
import newRecipeReducer from './newRecipeReducer'
import editRecipeReducer from './editRecipeReducer';
export default combineReducers({
    homepage: homePageReducer,
    signup: signUpReducer,
    login: loginReducer,
    newRecipe: newRecipeReducer,
    editRecipe: editRecipeReducer
   });