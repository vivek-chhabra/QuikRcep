import { NavLink, Routes, Route, useParams, Navigate } from "react-router-dom";
import NewRecipeProvider from "./context/NewRecipeContext";
import DetailedRecipe from "./pages/recipe/DetailedRecipe";
import CreateRecipe from "./pages/create/CreateRecipe";
import NavBar from "./components/NavBar";
import Home from "./pages/home/Home";
import { useState, useContext, createContext } from "react";
import "./App.css";
import RecipesProvider, { RecipesContext } from "./context/RecipesContext";
import {db} from './firebase/config'
import { collection, getDocs } from "firebase/firestore";

const recipeCollRef = collection(db, 'RecipesData')

function App() {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [recipes, setRecipes] = useState([]);
    const getData = async () => {
        try {
            const data = await getDocs(recipeCollRef);
        } catch (err) {
            console.log(err);
        }
        setRecipes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:ide" element={<DetailedRecipe recipes={recipes} />} />
                <Route path="/create" element={<CreateRecipe />} />
            </Routes>
        </div>
    );
}

export default App;
