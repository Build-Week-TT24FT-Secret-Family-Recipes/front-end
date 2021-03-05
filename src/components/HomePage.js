import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import Recipes from './Recipes'
import {getRecipes, setNewRecipe, setButton, getToken, filterRecipes} from '../actions/homePageActions'
import NewRecipeForm from '../components/NewRecipeForm'
const HomePage = (props) => {
    
    const handleAddButton = (e) => {
        props.setNewRecipe();
        
    }
    useEffect(() => {
        props.getToken();
        props.getRecipes();
          // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const handleFilter = (category) => {
        props.filterRecipes(category, props.recipes);
    }
    return (
        
        <div>
          {props.token && props.toggleButton ? <button onClick={handleAddButton}>Add new recipe</button> : null }
          {props.newRecipe ?
          <div> 
              <NewRecipeForm />
          </div>

               : null}
          {props.isLoading ? <div>Loading recipes...</div> :
            props.error ? <div>You must be logged in to see recipes</div> :
            <div> 
                <div>
            Filter recipes by category :
            <button onClick={() => {handleFilter('French')}}>French</button>
            <button onClick={() => {handleFilter('Japanese')}}>Japanese</button>
            <button onClick={() => {handleFilter('Chinese')}}>Chinese</button>
            <button onClick={() => {handleFilter('Spanish')}}>Spanish</button>
            <button onClick={() => {handleFilter('Italian')}}>Italian</button>
                </div>

            <Recipes /> 

             </div>
            
         }
         
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        recipes:state.homepage.recipes,
        token:state.homepage.token,
        isLoading: state.homepage.isLoading,
        error: state.homepage.error,
        newRecipe:state.homepage.newRecipe,
        toggleButton: state.homepage.toggleButton,

    }
}
    


export default connect(mapStateToProps, {getRecipes, setNewRecipe, setButton, getToken, filterRecipes})(HomePage)
