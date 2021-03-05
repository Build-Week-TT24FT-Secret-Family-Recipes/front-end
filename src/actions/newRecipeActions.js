import axiosWithAuth from '../utils/axiosWithAuth'
export const SET_RECIPE_VALUES = 'SET_RECIPE_VALUES'
export const SET_RECIPE_ERRORS = "SET_RECIPE_ERRORS"
export const RESET_RECIPE_FORM = 'RESET_RECIPE_FORM'


export const setRecipeForm = (name, value) => {
    return {type:SET_RECIPE_VALUES, payload:{name, value}}
}
export const setRecipeErrors = (name, error) => {

    return {type:SET_RECIPE_ERRORS, payload:{name, error}}
}

export const resetRecipeForm = () => {
    return {type:RESET_RECIPE_FORM}
}
export const addRecipe = (recipe) => {
    console.log(recipe)
    return dispatch => {
        axiosWithAuth().post('recipes/recipe', recipe)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err.response)
        })
    }
}