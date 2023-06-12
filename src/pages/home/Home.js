import { getDocs, addDoc, collection } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { RecipesContext } from "../../context/RecipesContext";
import RecipeCard from "../../components/RecipeCard";
import NavBar from "../../components/NavBar";
import { db } from "../../firebase/config";
import "../home/Home.css";

export default function Home() {
    const { recipes, getData } = useContext(RecipesContext);

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="Home" style={{ color: "white" }}>
            <div className="recipes">{recipes && recipes.map((recp) => <RecipeCard recipes={recp} />)}</div>
        </div>
    );
}
