import axiosWithAuth from '../utils/axiosWithAuth'
export const SET_RECIPE_VALUES = 'SET_RECIPE_VALUES'
export const SET_RECIPE_ERRORS = "SET_RECIPE_ERRORS"
export const RESET_RECIPE_FORM = 'RESET_RECIPE_FORM'
export const SET_RECIPE_CATEGORY = 'SET_RECIPE_CATEGORY'
 
export const setRecipeCategory = (value) => {
        if (value === 'French')
        return {type:SET_RECIPE_CATEGORY,payload:{name:value, categoryid:177}}
        else if(value === 'Japanese')
            return {type:SET_RECIPE_CATEGORY,payload:{name:value, categoryid:178}}
        else if(value === 'Chinese')
        return {type:SET_RECIPE_CATEGORY,payload:{name:value, categoryid:179}}
        else if(value === 'Spanish')
        return {type:SET_RECIPE_CATEGORY,payload:{name:value, categoryid:180}}
        else if(value === 'Italian')
        return {type:SET_RECIPE_CATEGORY,payload:{name:value, categoryid:181}}
        else
            return {}

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