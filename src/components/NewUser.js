import React, {useState, useEffect} from 'react'
import * as yup from 'yup'

import UserForm from './UserForm'
import formSchema from '../validation/formSchema'


const initialFormValues = {
        username: '',
        email: '',
        password: ''
    }
const initialFormErrors = {
        username: '',
        email: '',
        password: ''
    }
const initialDisabled = true;

function NewUser() {
    const [formValues, setFormValues] = useState(initialFormValues);
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    const [disabled, setDisabled] = useState(initialDisabled);
    const inputChange = (name, value) => {
        yup
            .reach(formSchema, name)
            .validate(value)
            .then(() => {
                setFormErrors({...formErrors, [name]: ''})
            })
            .catch(err => {
                setFormErrors({...formErrors, [name]: err.errors[0]})
            })
        setFormValues({
            ...formValues,
            [name]: value
        })
    }
    useEffect(() => {
        formSchema
            .isValid(formValues)
            .then(valid => setDisabled(!valid))
    }, [formValues])

    const formSubmit = () => {
         
    }

    return (
        <div className='new-user'>
            <UserForm
                values={formValues}
                submit={formSubmit}
                change={inputChange}
                disabled={disabled}
                errors={formErrors}
            />
        </div>
    )
}
export default NewUser;