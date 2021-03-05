import axiosWithAuth from '../utils/axiosWithAuth'
import {getRecipes} from '../actions/homePageActions'
export const SET_RECIPE_VALUES = 'SET_RECIPE_VALUES'
export const SET_RECIPE_ERRORS = "SET_RECIPE_ERRORS"
export const RESET_RECIPE_FORM = 'RESET_RECIPE_FORM'
export const SET_RECIPE_CATEGORY = 'SET_RECIPE_CATEGORY'
 
export const setRecipeCategory = (value, categoryList) => {
    return dispatch => {
        categoryList.map((category) => {
            return category.name === value ? dispatch({type:SET_RECIPE_CATEGORY, payload:category}) : dispatch({type:''})
          })
    }
}
export const setRecipeForm = (name, value) => {
    return {type:SET_RECIPE_VALUES, payload:{name:name, value:value}}
}
export const setRecipeErrors = (name, error) => {
    return {type:SET_RECIPE_ERRORS, payload:{name:name, error:error}}
}

export const resetRecipeForm = () => {
    return {type:RESET_RECIPE_FORM}
}
export const addRecipe = (recipe) => {
    return dispatch => {
        axiosWithAuth().post('recipes/recipe', recipe)
        .then((res) => {
            dispatch(getRecipes());
        })
        .catch((err) => {
            console.log(err.response)
        })
    }
}