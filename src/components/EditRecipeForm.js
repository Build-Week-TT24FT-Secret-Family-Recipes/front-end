import React, {useState} from 'react'
import * as yup from 'yup'
import formSchema from '../validation/formSchema'
// form inputs - title, source, ingredients, instructions, category 
const initialErrors = {
    title: '',
    source: '',
    ingredients: '',
    instructions: '',
    category: ''
}
const initialFormValues = {
    title: '',
    source: '',
    ingredients: '',
    instructions: '',
    category: ''
}
export default function NewRecipeForm(props) {
    const {values} = props;
    const [formValues, setFormValues] = useState(initialFormValues);
    const [errors, setErrors] = useState(initialErrors);
    const onChange = (name, value) => {
        yup
            .reach(formSchema, name)
            .validate(value)
            .then(() => {
                setErrors({...errors, [name]: ''})
            })
            .catch(err => {
                setErrors({...errors, [name]: err.errors[0]})
            })
            setFormValues({
                ...formValues,
                [name]: value
            })
    }
    return (
        <form className='new-recipe'>
            <h3>Edit Your Recipe Here!</h3>
            <div className='errors'>
                <div>{errors.title}</div>
                <div>{errors.source}</div>
                <div>{errors.ingredients}</div>
                <div>{errors.instructions}</div>
                <div>{errors.category}</div>
            </div>
            <lable>Title:
                <input name='title' type='text' value={values.title} onChange={onChange} />
            </lable>
            <lable>Source:
                <input name='source' type='text' value={values.source} onChange={onChange} />
            </lable>
            <lable>Ingredients:
                <input name='ingredients' type='text' value={values.ingredients} onChange={onChange} />
            </lable>
            <lable>Instructions:
                <input name='instructions' type='text' value={values.instructions} onChange={onChange} />
            </lable>
            <lable>Category:
                <input name='category' type='text' value={values.category} onChange={onChange} />
            </lable>
        </form >
    )
}
