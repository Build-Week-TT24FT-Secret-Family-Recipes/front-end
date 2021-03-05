import React from 'react'

export default function Recipes(props) {
    const onDelete = () => {
        props.handleDelete(props.recipe.recipeid)
    }
    return (
        <div>
            <h2>{props.recipe.title}</h2>
            <p> Source: {props.recipe.source}</p>
            <div> Ingredients: {props.recipe.ingredients}</div>
            <div> Instructions: {props.recipe.instructions}</div>
            <div> Category: {props.recipe.category.name}</div>
            { props.token ? (
                <div> 
                <button onClick={props.handleEdit}>Edit</button>
                <button onClick={onDelete}>Delete</button>
                </div>
                ) : null 
                }
        </div>
    )
}
