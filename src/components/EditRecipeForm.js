import React from 'react'
import * as yup from 'yup'
import recipeFormSchema from '../validation/recipeFormSchema'
import {setEditRecipeForm, setEditRecipeErrors, resetEditRecipeForm, setEditRecipeCategory, setEditRecipe} from '../actions/editRecipeActions'
import {editRecipe} from '../actions/homePageActions'
import {connect} from 'react-redux'
    
function EditRecipeForm(props) {
    const {values, errors} = props;
    const handleEdit = (e) => {
        e.preventDefault();
        props.setEditRecipe(props.currentRecipe, props.values);
        props.editRecipe();
        props.resetEditRecipeForm();
    }
    const handleCancel = () => {
        props.resetEditRecipeForm();
    }
    const onChange = (e) => {
        const {name, value} = e.target
        yup
            .reach(recipeFormSchema, name)
            .validate(value)
            .then(() => {
                props.setEditRecipeErrors(name ,'')
            })
            .catch(err => {
                props.setEditRecipeErrors(name ,err.errors[0])
            })
            name === 'category' ? props.setEditRecipeCategory(value, props.categoryList):
           props.setEditRecipeForm(name,value);
    }
    return (
        <form onSubmit={handleEdit}className='new-recipe'>
            <h3>Edit your Recipe</h3>
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
            <button>Edit recipe</button> 
            <button onClick={handleCancel}>Cancel</button>
        </form >
    )
}
const mapStateToProps = (state) => {
    return {
        values: state.editRecipe.formValues,
        errors: state.editRecipe.errors,
        currentRecipe: state.homepage.currentRecipe,
        categoryList: state.homepage.categoryid
    }
}
export default connect(mapStateToProps, {setEditRecipeForm, setEditRecipeErrors, resetEditRecipeForm,setEditRecipe, editRecipe, setEditRecipeCategory})(EditRecipeForm)