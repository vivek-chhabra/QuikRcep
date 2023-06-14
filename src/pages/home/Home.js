import { getDocs, addDoc, collection } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { RecipesContext } from "../../context/RecipesContext";
import RecipeCard from "../../components/RecipeCard";
import NavBar from "../../components/NavBar";
import { db } from "../../firebase/config";
import "../home/Home.css";

export default function Home() {
    const { recipes, getData, errorMsg } = useContext(RecipesContext);

    useEffect(() => {
        getData();
    }, []);

    // error styles
    const err = {
        color: 'red',
        fontSize: '150%',
        fontWeight: '600',
        backgroundColor: '#ffa2a2',
        width: '300px',
        marginInline: 'auto',
        borderRadius: '5px',
        padding: '5px 20px',
    }

    return (
        <div className="Home" style={{ color: "white" }}>
            {errorMsg && <div className="recipes" style={err}>Error : {errorMsg}</div>}
            <div className="recipes">{recipes && recipes.map((recp) => <RecipeCard recipes={recp} />)}</div>
        </div>
    );
}
