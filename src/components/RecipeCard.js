import { RecipesContext } from "../context/RecipesContext";
import { NavLink, useParams } from "react-router-dom";
import React, { useContext, useState } from "react";
import { capitalize } from "../helpers";
import "./RecipeCard.css";
import { ThemeContext } from "../context/ThemeContext";

export default function RecipeCard(props) {
    const { title, duration, method, id } = props.recipes;

    // consuming deleteRecipe (context)
    const { deleteRecipe } = useContext(RecipesContext);

    // darkMode
    const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

    const handleDelete = () => {
        deleteRecipe(id);
        window.location.reload()
    };

    return (
        <div className={isDarkMode ? "RecipeCard dark" : "RecipeCard"}>
            <div className="rec-content">
                <div className="rec-head">
                    <h2>{capitalize(title)}</h2>
                    <i class="fa-solid fa-trash-can" onClick={handleDelete}></i>
                </div>
                <p className="time-duration">{duration} minutes to make</p>
                <p className="method">{method.slice("0", "80")}...</p>
            </div>
            <NavLink to={`/${id}`} className="btn btn-secondary cook">
                Cook This
            </NavLink>
        </div>
    );
}
