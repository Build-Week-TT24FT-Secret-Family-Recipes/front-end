import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import Recipes from './Recipes'
import {getRecipes, setNewRecipe, setButton, deleteRecipe} from '../actions/homePageActions'
import NewRecipeForm from '../components/NewRecipeForm'
const HomePage = (props) => {
    const handleDelete = (id) => {
        props.deleteRecipe(id);
    }
    const handleAddButton = (e) => {
        props.setNewRecipe();
        
    }
    useEffect(() => {
        props.getRecipes();
          // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (

        <div>
          {props.token && props.toggleButton ? <button onClick={handleAddButton}>Add new recipe</button> : null }
          {props.newRecipe ?
          <div> 
              <NewRecipeForm />
          </div>

               : null}
          {props.isLoading ? <div>Loading recipes...</div> :
            props.error ? <div>{props.error}</div> :
            
              props.recipes.map((recipe) => {
            
            return <Recipes key={recipe.recipeid} recipe={recipe} token={props.token} handleDelete={handleDelete} />
         })}
         
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        recipes:state.homepage.recipes,
        token:state.login.token,
        isLoading: state.homepage.isLoading,
        error: state.homepage.error,
        newRecipe:state.homepage.newRecipe,
        toggleButton: state.homepage.toggleButton
    }
}
    


export default connect(mapStateToProps, {getRecipes, setNewRecipe, setButton, deleteRecipe})(HomePage)
