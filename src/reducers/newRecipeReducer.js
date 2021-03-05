import {SET_RECIPE_VALUES, SET_RECIPE_ERRORS,RESET_RECIPE_FORM} from '../actions/newRecipeActions'

const initialState = {
    errors : {
        title: '',
        source: '',
        ingredients: '',
        instructions: '',
        category: ''
    },
    formValues:{
        title: '',
        source: '',
        ingredients: '',
        instructions: '',
        category: ''
    }
}

 const newRecipeReducer = (state = initialState, action) => {
    switch (action.type) {
    case SET_RECIPE_VALUES:
        return { ...state, 
            formValues:{...state.formValues, [action.payload.name] : action.payload.value}
        }
    case SET_RECIPE_ERRORS:
        return { ...state, errors:{...state.errors, [action.payload.name]:action.payload.value} }
    // case RESET_RECIPE_FORM:
    //     return initialState
    default:
        return state
    }
}
export default newRecipeReducer
