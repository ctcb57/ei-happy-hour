import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { _getCocktailById } from "../api/cocktailDb";

import Header from "../components/base/Header";
import Footer from "../components/base/Footer";
import DrinkDetailsSection from "../components/drinkDetailsPage/DetailsSection";

const DrinkDetailsPage = () => {
    let { id } = useParams();
    const [drink, setDrink] = useState({});

    useEffect(() => {
        _getCocktailById(id)
            .then((response) => {
                setDrink(response.drinks[0])
            })
            .catch((err) => {})
    }, [id])
    
    console.log(drink);

    return (
        <>
            <Header />
            <DrinkDetailsSection 
                drink={drink}
            />
            <Footer />
        </>
    )
}

export default DrinkDetailsPage;