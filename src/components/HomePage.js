import React from 'react'
import { connect } from 'react-redux'
import Recipes from './Recipes'
export const HomePage = (props) => {
    return (
        <div>
          {props.token ? <button>Add new recipe</button> : null
          }
          {props.recipes.map((recipe) => {
             return <Recipes recipe={recipe}/>
          })}
        </div>
    )
}

const mapStateToProps = (state) => ({
    recipes:state.homepage.recipes,
    token:state.homepage.token
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
