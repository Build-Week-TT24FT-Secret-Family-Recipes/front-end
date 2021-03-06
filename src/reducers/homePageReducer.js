
import {GET_RECIPES, START_FETCH, FETCH_FAIL, SET_NEW_RECIPE, SET_BUTTON, SET_HOME_ERROR, GET_TOKEN, EDIT_RECIPE, SET_CATEGORY_ID, FILTER_RECIPES} from '../actions/homePageActions'


const initialState = {
    recipes:[],
    filteredRecipes: [],
    isLoading:false,
    error:'',
    newRecipe: false,
    toggleButton: true,
    token:false,
    edit: false,
    currentRecipe: '',
    categoryid:[],
    toggleFiltered: false
}
 const homePageReducer = (state = initialState, action) => {
    switch (action.type) {
    case START_FETCH : 
    return ({...state, isLoading:true})
    case FETCH_FAIL : 
    return ({...state, isLoading:false, error:action.payload})
    case GET_RECIPES:
        return ({ ...state, recipes:action.payload, isLoading:false})
    case SET_NEW_RECIPE :
        return ({...state, newRecipe:true, toggleButton:false})
    case SET_BUTTON : 
        return ({...state, newRecipe:false, toggleButton:true})
    case SET_HOME_ERROR:
        return {...state, error:''}
    case GET_TOKEN:
        return {...state, token:true}
    case EDIT_RECIPE :
        return {...state, edit:!state.edit, currentRecipe: action.payload}
    case SET_CATEGORY_ID : 
    return {...state, categoryid:action.payload}
    case FILTER_RECIPES:
        return {...state, filteredRecipes:action.payload, toggleFiltered: !state.toggleFiltered}
    default:
        return state
    }
}

export default homePageReducer
