import React, { createContext, useReducer } from "react";
import { useInput } from "../hooks/useInput";

export const NewRecipeContext = createContext();

export default function NewRecipeProvider(props) {
    // all states to take input
    const [recipeTitle, updateRecipeTitle, resetTitle] = useInput("");
    const [recipeIngredients, updateRecipeIngredients, resetIng] = useInput("");
    const [recipeMethod, updateRecipeMethod, resetMethod] = useInput("");
    const [recipeDuration, updateRecipeDuration, resetDura] = useInput('');

    return <NewRecipeContext.Provider value={{ recipeTitle, updateRecipeTitle, recipeIngredients, updateRecipeIngredients, recipeMethod, updateRecipeMethod, recipeDuration, updateRecipeDuration, resetDura, resetIng, resetMethod, resetTitle }}>{props.children}</NewRecipeContext.Provider>;
}
