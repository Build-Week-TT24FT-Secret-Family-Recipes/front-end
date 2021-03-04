import {GET_RECIPES} from '../actions/homePageActions'

const initialState = {
    recipes:[],
    token:false
}

 const homePageReducer = (state = initialState, action) => {
    switch (action.type) {
    case GET_RECIPES:
    
        return { ...state, recipes:action.payload}

    default:
        return state
    }
}

export default homePageReducer