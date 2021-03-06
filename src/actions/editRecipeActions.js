
import axiosWithAuth from "../utils/axiosWithAuth"
import {getRecipes} from './homePageActions'
export const SET_EDIT_RECIPE_CATEGORY = 'SET_EDIT_RECIPE_CATEGORY'
export const RESET_EDIT_RECIPE_FORM = 'RESET_EDIT_RECIPE_FORM'
export const SET_EDIT_RECIPE_VALUES = 'SET_EDIT_RECIPE_VALUES'
export const SET_EDIT_RECIPE_ERRORS = 'SET_EDIT_RECIPE_ERRORS'



export const setEditRecipeCategory = (value, categoryList) => {
    return dispatch => {
        categoryList.map((category) => {
            return category.name === value ? dispatch({type:SET_EDIT_RECIPE_CATEGORY, payload:category}) : dispatch({type:''})
          })
    }

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
    const test = {recipeid:recipeid, ...values}
        console.log(test)
    return (dispatch) => {
        axiosWithAuth().put(`/recipes/recipe/${recipeid}`, test)
        .then((res) => {
            dispatch(getRecipes())
        })
        .catch((err) => {
            console.log(err)
        })
    }


}

