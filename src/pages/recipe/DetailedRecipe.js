import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RecipesContext } from "../../context/RecipesContext";
import "../recipe/DetailedRecipe.css";
import { ThemeContext } from "../../context/ThemeContext";

export default function DetailedRecipe() {
    const { ide } = useParams();
    const { recipes, getData } = useContext(RecipesContext);

    // dark mode
    const { isDarkMode } = useContext(ThemeContext);

    function detailedRec() {
        return recipes.map((recipe) => {
            return (
                recipe.id === ide && (
                    <>
                        <h2 className="rec-title">{recipe.title}</h2>
                        <div className="duration">Takes {recipe.duration} minutes to cook.</div>
                        <div className="ingredients">
                            {recipe.ingredients}.
                        </div>
                        <div className="method">{recipe.method}</div>
                    </>
                )
                );
        });
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className={isDarkMode ? "DetailedRecipe dark" : "DetailedRecipe"}>
            <div className="container">{detailedRec()}</div>
        </div>
    );
}
