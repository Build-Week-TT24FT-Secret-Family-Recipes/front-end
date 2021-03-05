import React from 'react'

export default function Recipes(props) {
    return (

        <div>
            <h2>{props.recipe.title}</h2>
            <p> {props.recipe.source}</p>
            <div> {props.recipe.ingredients}</div>
            <div> {props.recipe.instructions}</div>
            {/* <div> {props.recipe.category.name}</div> */}
            { props.token ? (
                <div> 
                <button>Edit</button>
                <button>Delete</button>
                </div>
                ) : null 
                }
        </div>
    )
}
