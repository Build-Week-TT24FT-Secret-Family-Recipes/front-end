import axiosWithAuth from '../utils/axiosWithAuth'
export const SET_NEW_RECIPE= 'SET_NEW_RECIPE'
export const START_FETCH = "START_FETCH"
export const GET_RECIPES = 'GET_RECIPES'
export const FETCH_FAIL = 'FETCH_FAIL'
export const SET_BUTTON='SET_BUTTON'
export const SET_HOME_ERROR = 'SET_HOME_ERROR'
export const GET_TOKEN = 'GET_TOKEN'


export const getRecipes = () => {
    return dispatch => {
        dispatch({type:START_FETCH})
        axiosWithAuth().get('recipes/recipes')
        .then((res) => {
            dispatch({type:GET_RECIPES, payload:res.data})
        })
        .catch((err) => {
            console.log(err.response.data.error_description)
            dispatch({type:FETCH_FAIL, payload : err.response.data.error_description})
           
        })
    }
}
export const getToken = () => {
    if(localStorage.getItem('token')) 
    return {type:GET_TOKEN}
    else 
    return{type:''}
}
export const setHomeError = () => {
    return {type:SET_HOME_ERROR}
}
export const setNewRecipe = () => {
    return {type:SET_NEW_RECIPE}
}
export const setButton = () => {
    return {type:SET_BUTTON}
}
export const deleteRecipe = (id) => {
    return dispatch => {
        axiosWithAuth().delete(`/recipes/recipe/${id}`)
        .then((res) => {
           dispatch(getRecipes())
        })
        .catch((err) => {
            console.log(err.response)
        })
    }
}
// "/recipes/recipes" for the Get items
//  "/recipes/recipe/{recipeid}" for Edit item
//  "/recipes/recipe/{id}" for Delete item.
// "/recipes/recipe" for the Add new item