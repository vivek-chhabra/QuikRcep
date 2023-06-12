import { NewRecipeContext } from "../../context/NewRecipeContext";
import React, { useContext, useEffect, useState } from "react";
import { RecipesContext } from "../../context/RecipesContext";
import { ThemeContext } from "../../context/ThemeContext";
import { addDoc, collection } from "firebase/firestore";
import { useInput } from "../../hooks/useInput";
import { db } from "../../firebase/config";
import "../create/CreateRecipe.css";

const recipeCollRef = collection(db, "RecipesData");

export default function CreateRecipe() {
    // consuming the values provided at contexts
    let { recipeTitle, updateRecipeTitle, recipeIngredients, updateRecipeIngredients, recipeMethod, updateRecipeMethod, recipeDuration, updateRecipeDuration, resetTitle, resetDura, resetIng, resetMethod } = useContext(NewRecipeContext);
    const { recipes, getData } = useContext(RecipesContext);

    // states
    const [isSubmited, setIsSubmited] = useState(false);

    // dark mode
    const { isDarkMode } = useContext(ThemeContext);

    // handling submit the when the recipe info is submited
    const handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            await addDoc(recipeCollRef, { title: recipeTitle, duration: recipeDuration, method: recipeMethod, ingredients: recipeIngredients });
            setIsSubmited(true);
        } catch (err) {
            console.log(err);
        }
        setTimeout(() => {
            setIsSubmited(false);
        }, 2000);
        resetDura();
        resetIng();
        resetMethod();
        resetTitle();
        getData();
    };

    useEffect(() => {});
    return (
        <div className={isDarkMode ? "CreateRecipe dark" : "CreateRecipe"}>
            <div className="container">
                <form action="" onSubmit={handleSubmit}>
                    <h2>
                        {isSubmited ? (
                            <div className="added">Added Recipe Successfully.!</div>
                        ) : (
                            <div className="head">
                                Add a New Recipe <span>😋</span>
                            </div>
                        )}
                    </h2>
                    <div className="input-info">
                        <label htmlFor="title">Recipe Title : </label>
                        <input type="text" name="" placeholder="Recipe Name" required value={recipeTitle} onChange={updateRecipeTitle} id="title" />
                        <label htmlFor="ingredients">Ingredients : </label>
                        <input type="text" name="" placeholder="Separate Ingredients by a Comma" required value={recipeIngredients} onChange={updateRecipeIngredients} id="ingredients" />
                        <label htmlFor="method">How To Make : </label>
                        <input type="text" name="" placeholder="Specify The Method" required value={recipeMethod} onChange={updateRecipeMethod} id="method" />
                        <label htmlFor="cookingTime">Duration : </label>
                        <input type="number" name="" placeholder="Time Taken By The Recipe" required value={recipeDuration} onChange={updateRecipeDuration} id="cookingTime" />
                    </div>
                    <button className="btn btn-primary">Add Recipe...</button>
                </form>
            </div>
        </div>
    );
}
