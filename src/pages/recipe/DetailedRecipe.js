import { RecipesContext } from "../../context/RecipesContext";
import { ThemeContext } from "../../context/ThemeContext";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../recipe/DetailedRecipe.css";

export default function DetailedRecipe() {
    const { ide } = useParams();

    // consuming the recipes by using RecipeContext
    const { recipes, getData } = useContext(RecipesContext);

    // dark mode
    const { isDarkMode } = useContext(ThemeContext);

    function detailedRec() {
        return recipes.map((recipe) => {
            return (
                recipe.id === ide && (
                    <>
                        <h2 className="rec-title">{recipe.title}</h2>
                        <div className="duration">Takes {recipe.duration} {recipe.duration > 1 ? 'minutes' : 'minute'} to cook.</div>
                        <div className="ingredients">
                            {recipe.ingredients}.
                        </div>
                        <div className="method">{recipe.method}</div>
                    </>
                )
                );
        });
    }

    return (
        <div className={isDarkMode ? "DetailedRecipe dark" : "DetailedRecipe"}>
            <div className="container">{detailedRec()}</div>
        </div>
    );
}
