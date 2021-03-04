import axiosWithAuth from '../utils/axiosWithAuth'

export const START_FETCH = "START_FETCH"
export const GET_RECIPES = 'GET_RECIPES'
export const FETCH_FAIL = 'FETCH_FAIL'


export const getRecipes = () => {
    return dispatch => {
        dispatch({type:START_FETCH})
        axiosWithAuth().get(`/recipes/recipes`)
        .then((res) => {
            console.log(res)
            dispatch({type:GET_RECIPES, payload:"res in here"})
        })
        .catch((err) => {
            console.log(err)
            dispatch({type:FETCH_FAIL, payload:"res in here"})
        })
    }
}
