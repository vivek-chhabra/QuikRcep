import React, { createContext, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config";

// creating context
export const RecipesContext = createContext();

// database reference
const recipeCollRef = collection(db, "RecipesData");

export default function RecipesProvider(props) {
    // all recipes stored here
    const [recipes, setRecipes] = useState([]);
    const [errorMsg, setErrorMsg] = useState([]);

    // to delete the recipe card
    const deleteRecipe = async (id) => {
        const delDoc = doc(db, "RecipesData", id);
        try {
            await deleteDoc(delDoc);
        } catch (err) {
            console.log(err.message);
            setErrorMsg(err.message);
        }
    };

    // getting documents from the firestore database
    const getData = async () => {
        try {
            const data = await getDocs(recipeCollRef);
            setRecipes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        } catch (err) {
            console.log(err.message);
            setErrorMsg(err.message);
        }
    };

    return <RecipesContext.Provider value={{ recipes, getData, deleteRecipe, errorMsg }}>{props.children}</RecipesContext.Provider>;
}
