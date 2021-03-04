import {GET_RECIPES} from '../actions/HomePageActions'

const initialState = {
    recipes:[],
    token:false
}

export default (state = initialState, action) => {
    switch (action.type) {

    case GET_RECIPES:
        return { ...state, recipes:action.payload}

    default:
        return state
    }
}
