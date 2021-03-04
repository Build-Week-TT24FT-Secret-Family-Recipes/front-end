import {SET_ERROR,SET_VALUES,SET_DISABLED, CLEAR_FORM} from '../actions/signUpActions'
const initialState = {
    formValues:{
        username: '',
        email: '',
        password: ''
    },
    formErrors:{
        username: '',
        email: '',
        password: ''
    },
    disabled:true
}

 const signUpReducer = (state = initialState, action) => {
     
    switch (action.type) {
    case SET_VALUES:
        return { ...state, 
        formValues:{...state.formValues, [action.payload.name] : action.payload.value
        }
    }
    case SET_ERROR :
        return  { ...state, 
            formErrors:{...state.formErrors, [action.payload.name] : action.payload.error}
        }
    case SET_DISABLED :
            return  { ...state, 
                disabled: action.payload
                }
    case CLEAR_FORM : 
        return initialState
    default:
        return state
    }
}
export default signUpReducer
