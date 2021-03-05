import React from 'react'
import * as yup from 'yup'
import recipeFormSchema from '../validation/recipeFormSchema'
import {setRecipeForm, setRecipeErrors, resetRecipeForm,addRecipe, setRecipeCategory} from '../actions/newRecipeActions'
import {setButton} from '../actions/homePageActions'
import {connect} from 'react-redux'
    
function NewRecipeForm(props) {
    const {values, errors} = props;
    const handleSubmit = (e) => {
        props.addRecipe(props.values)
        props.resetRecipeForm();
        props.setButton();
    }
    const handleCancel = () => {
        props.resetRecipeForm();
        props.setButton();
    }
    const onChange = (e) => {
        const {name, value} = e.target
        yup
            .reach(recipeFormSchema, name)
            .validate(value)
            .then(() => {
                props.setRecipeErrors(name ,'')
            })
            .catch(err => {
                props.setRecipeErrors(name ,err.errors[0])
            })
            name === 'category' ? props.setRecipeCategory(value):
           props.setRecipeForm(name,value);
    }
    return (
        <form onSubmit={handleSubmit}className='new-recipe'>
            <h3>New Recipe</h3>
            <div className='errors'>
                <div>{errors.title}</div>
                <div>{errors.source}</div>
                <div>{errors.ingredients}</div>
                <div>{errors.instructions}</div>
                <div>{errors.category}</div>
            </div>
            <label>Title:
                <input name='title' type='text' value={values.title} onChange={onChange} />
            </label>
            <label>Source:
                <input name='source' type='text' value={values.source} onChange={onChange} />
            </label>
            <label>Ingredients:
                <input name='ingredients' type='text' value={values.ingredients} onChange={onChange} />
            </label>
            <label>Instructions:
                <input name='instructions' type='text' value={values.instructions} onChange={onChange} />
            </label>
            <label>Category:
          <select onChange={onChange} value={values.category.name} name="category">
            <option value="">- Select an option -</option>
            <option value={"French"}>French</option>
            <option value={"Japanese"}>Japanese</option>
            <option value={"Chinese"}>Chinese</option>
            <option value={"Spanish"}>Spanish</option>
            <option value={"Italian"}>Italian</option>
          </select>
            </label>
            <button>Add recipe</button> 
            <button onClick={handleCancel}>Cancel</button>
        </form >
    )
}
const mapStateToProps = (state) => {
    return {
        values: state.newRecipe.formValues,
        errors: state.newRecipe.errors,
    }
}
export default connect(mapStateToProps, {setRecipeForm, setRecipeErrors, resetRecipeForm, addRecipe, setButton, setRecipeCategory})(NewRecipeForm)