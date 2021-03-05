import React from 'react'
import {connect} from 'react-redux'
import EditRecipeForm from './EditRecipeForm'
import {deleteRecipe, editRecipe} from '../actions/homePageActions'

 function Recipes(props) {
    const handleDelete = (id) => {
        props.deleteRecipe(id)
    }
    const handleEdit = (id) => {
        props.editRecipe(id)
    }
    return (
        <div> 
             { props.edit ? 
                     <EditRecipeForm /> :
                     null}
            {props.recipes.map((recipe) => {
            return <div key ={recipe.recipeid}>
                <h2>{recipe.title}</h2>
                <p> Source: {recipe.source}</p>
                <div> Ingredients: {recipe.ingredients}</div>
                <div> Instructions: {recipe.instructions}</div>
                <div> Category: {recipe.category.name}</div>
                    {props.token ?
                     (
                        <div> 
                        <button onClick={() => {handleEdit(recipe.recipeid)}}>Edit</button>
                        <button onClick={() => {handleDelete(recipe.recipeid)}}>Delete</button>
                        </div>
                        ) : null}
                 </div>             
            })}
            </div>
    )
}

const mapStateToProps = (state) => {
    return {
        recipes: state.homepage.recipes,
        token: state.homepage.token,
        edit: state.homepage.edit,
        currentRecipe: state.homepage.currentRecipe
    }
}
export default connect(mapStateToProps, {deleteRecipe, editRecipe})(Recipes)
