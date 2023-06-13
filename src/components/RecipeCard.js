import { NavLink, useNavigate, useParams } from "react-router-dom";
import { RecipesContext } from "../context/RecipesContext";
import { ThemeContext } from "../context/ThemeContext";
import React, { useContext, useState } from "react";
import { capitalize } from "../helpers";
import "./RecipeCard.css";


export default function RecipeCard(props) {
    const { title, duration, method, id } = props.recipes;
    const navigate = useNavigate()

    // consuming deleteRecipe (context)
    const { deleteRecipe } = useContext(RecipesContext);

    // darkMode
    const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

    // to delete Recipe Card
    const handleDelete = async () => {
        await deleteRecipe(id);
        // await window.location.reload();
        navigate('/QuikRcep')
    };

    return (
        <div className={isDarkMode ? "RecipeCard dark" : "RecipeCard"}>
            <div className="rec-content">
                <div className="rec-head">
                    <h2>{capitalize(title)}</h2>
                    <i class="fa-solid fa-trash-can" onClick={handleDelete}></i>
                </div>
                <p className="time-duration">
                    {duration} {duration > 1 ? "minutes" : "minute"} to make
                </p>
                <p className="method">{method.slice("0", "80")}...</p>
            </div>
            <NavLink to={`/${id}`} className="btn btn-secondary cook">
                Cook This
            </NavLink>
        </div>
    );
}
