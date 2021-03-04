import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import Recipes from './Recipes'
import {getRecipes} from '../actions/homePageActions'
const HomePage = (props) => {


    useEffect(() => {
        props.getRecipes();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
          {props.token ? <button>Add new recipe</button> : null
          }
          {props.recipes.map((recipe) => {
             return <Recipes recipe={recipe} token={props.token}/>
          })}
        </div>
    )
}

const mapStateToProps = (state) => ({
    recipes:state.homepage.recipes,
    token:state.homepage.token
})


export default connect(mapStateToProps, {getRecipes})(HomePage)
