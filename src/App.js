import { NavLink, Routes, Route, useParams, Navigate } from "react-router-dom";
import RecipesProvider, { RecipesContext } from "./context/RecipesContext";
import NewRecipeProvider from "./context/NewRecipeContext";
import DetailedRecipe from "./pages/recipe/DetailedRecipe";
import CreateRecipe from "./pages/create/CreateRecipe";
import { ThemeContext } from "./context/ThemeContext";
import { useState, useContext } from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/home/Home";
import "./App.css";
import SearchRecipe from "./pages/search/SearchRecipe";

function App() {
    const { recipes } = useContext(RecipesContext);
    const { ide } = useParams();

    // dark mode
    const { isDarkMode } = useContext(ThemeContext);

    return (
        <div className={isDarkMode ? "App dark" : "App"}>
            <NavBar key={crypto.randomUUID()} />
            <Routes>
                <Route path="/QuikRcep" element={<Navigate to="/" />} />
                <Route path="/" element={<Home />} />
                <Route path="/:ide" element={<DetailedRecipe key={crypto.randomUUID()} recipes={recipes} />} />
                <Route path="/create" element={<CreateRecipe key={crypto.randomUUID()} />} />
                <Route path="/search" element={<SearchRecipe key={crypto.randomUUID()} />} />
            </Routes>
        </div>
    );
}

export default App;
