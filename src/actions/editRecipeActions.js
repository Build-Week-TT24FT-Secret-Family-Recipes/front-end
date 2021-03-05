
import axiosWithAuth from "../utils/axiosWithAuth"
import {getRecipes} from './homePageActions'
export const SET_EDIT_RECIPE_CATEGORY = 'SET_EDIT_RECIPE_CATEGORY'
export const RESET_EDIT_RECIPE_FORM = 'RESET_EDIT_RECIPE_FORM'
export const SET_EDIT_RECIPE_VALUES = 'SET_EDIT_RECIPE_VALUES'
export const SET_EDIT_RECIPE_ERRORS = 'SET_EDIT_RECIPE_ERRORS'



export const setEditRecipeCategory = (value) => {
    if (value === 'French')
    return {type:SET_EDIT_RECIPE_CATEGORY,payload:{name:value, categoryid:177}}
    else if(value === 'Japanese')
        return {type:SET_EDIT_RECIPE_CATEGORY,payload:{name:value, categoryid:178}}
    else if(value === 'Chinese')
    return {type:SET_EDIT_RECIPE_CATEGORY,payload:{name:value, categoryid:179}}
    else if(value === 'Spanish')
    return {type:SET_EDIT_RECIPE_CATEGORY,payload:{name:value, categoryid:180}}
    else if(value === 'Italian')
    return {type:SET_EDIT_RECIPE_CATEGORY,payload:{name:value, categoryid:181}}
    else
        return {}

}
export const setEditRecipeForm = (name, value) => {
return {type:SET_EDIT_RECIPE_VALUES, payload:{name:name, value:value}}
}
export const setEditRecipeErrors = (name, error) => {
return {type:SET_EDIT_RECIPE_ERRORS, payload:{name:name, error:error}}
}

export const resetEditRecipeForm = () => {
return {type:RESET_EDIT_RECIPE_FORM}
}
export const setEditRecipe = (recipeid, values) => {
   
    return (dispatch) => {
        axiosWithAuth().put(`/recipes/recipe/${recipeid}`, values)
        .then((res) => {
            dispatch(getRecipes())
        })
        .catch((err) => {
            console.log(err)
        })
    }


}

