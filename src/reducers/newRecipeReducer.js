import {SET_RECIPE_VALUES, SET_RECIPE_ERRORS,RESET_RECIPE_FORM, SET_RECIPE_CATEGORY} from '../actions/newRecipeActions'

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

 const newRecipeReducer = (state = initialState, action) => {
    switch (action.type) {
    case SET_RECIPE_VALUES:
        console.log(state)
        return { ...state, 
            formValues:{...state.formValues, [action.payload.name] : action.payload.value}
        }
    case SET_RECIPE_ERRORS:
        console.log(action.payload.name, action.payload.error)
        return { ...state, 
            errors:{...state.errors, [action.payload.name]:action.payload.error} }
    case RESET_RECIPE_FORM:
        return initialState
    case SET_RECIPE_CATEGORY:
        console.log(action.payload.name, action.payload.categoryid)
        return { ...state, 
            formValues:{...state.formValues, category:{name:action.payload.name, categoryid:action.payload.categoryid}}
        }
    default:
        return state
    }
}
export default newRecipeReducer
