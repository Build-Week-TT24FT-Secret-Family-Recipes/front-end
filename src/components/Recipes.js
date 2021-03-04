import React from 'react'

export default function Recipes(props) {
    return (
        <div>
            <div> {props.recipe.title}</div>
            <div> {props.recipe.source}</div>
            <div> {props.recipe.ingredients}</div>
            <div> {props.recipe.instructions}</div>
            <div> {props.recipe.category}</div>
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
