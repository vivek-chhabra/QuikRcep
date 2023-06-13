import React from "react";
import { useLocation } from "react-router-dom";

export default function SearchRecipe() {
    const location = useLocation();
    console.log(location)
    return <div>{location.searchTerm}</div>;
}
