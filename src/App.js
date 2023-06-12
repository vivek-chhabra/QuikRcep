import { NavLink, Routes, Route, useParams, Navigate } from "react-router-dom";
import RecipesProvider, { RecipesContext } from "./context/RecipesContext";
import NewRecipeProvider from "./context/NewRecipeContext";
import DetailedRecipe from "./pages/recipe/DetailedRecipe";
import CreateRecipe from "./pages/create/CreateRecipe";
import { useState, useContext } from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/home/Home";
import "./App.css";
import { ThemeContext } from "./context/ThemeContext";


function App() {
    const { recipes } = useContext(RecipesContext);
    const { ide } = useParams();

    // dark mode
    const {isDarkMode} = useContext(ThemeContext);

    return (
        <div className={isDarkMode ? "App dark" :"App"}>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:ide" element={<DetailedRecipe recipes={recipes} />} />
                <Route path="/create" element={<CreateRecipe />} />
            </Routes>
        </div>
    );
}

export default App;
