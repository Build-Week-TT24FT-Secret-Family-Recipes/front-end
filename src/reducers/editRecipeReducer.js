import {SET_EDIT_RECIPE_CATEGORY,RESET_EDIT_RECIPE_FORM, SET_EDIT_RECIPE_VALUES,SET_EDIT_RECIPE_ERRORS} from '../actions/editRecipeActions'

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
        category:  {name:'', categoryid:""}
    }
}

 const editRecipeReducer = (state = initialState, action) => {
    switch (action.type) {
    case SET_EDIT_RECIPE_VALUES:
        return { ...state, 
            formValues:{...state.formValues, [action.payload.name] : action.payload.value}
        }
    case SET_EDIT_RECIPE_ERRORS:
        return { ...state, 
            errors:{...state.errors, [action.payload.name]:action.payload.error} }
    case RESET_EDIT_RECIPE_FORM:
        return initialState
    case SET_EDIT_RECIPE_CATEGORY:
        return { ...state, 
            formValues:{...state.formValues, category:{name:action.payload.name, categoryid:action.payload.categoryid}}
        }
    default:
        return state
    }
}
export default editRecipeReducer
