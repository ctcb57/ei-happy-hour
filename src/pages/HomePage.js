import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from "../providers/UserProvider";

import { _getRandomCocktail } from "../api/cocktailDb";

import RandomDrinkCard from "../components/homePage/RandomDrinkCard";
import Header from "../components/base/Header";
import Footer from "../components/base/Footer";
import LargeButton from "../components/base/LargeButton";
import LoadingSpinner from "../components/base/LoadingSpinner";

const HomePage = () => {
    const [randomCocktail1, setRandomCocktail1] = useState({});
    const [randomCocktail2, setRandomCocktail2] = useState({})
    const [isLoading, setLoading] = useState(true);
    const user = useContext(UserContext);

    useEffect(() => {
        _getRandomCocktail()
            .then((response) => {
                setRandomCocktail1(response.drinks[0]);
            })
            .catch((err) => {})
        
        _getRandomCocktail()
            .then((response) => {
                setRandomCocktail2(response.drinks[0]);
            })
            .catch((err) => {})
        setLoading(false);
    },[user])
    
    return (
        <>
            <Header />
            <br/>
            <LargeButton 
                message="Search Our Cocktails"
                link="/search"
            />
            <main className="main">
                <div className="row">
                    <div className="col-1-of-2">
                        {isLoading ? 
                        <LoadingSpinner isLoading={isLoading} /> 
                        : 
                        <RandomDrinkCard 
                            drinkId={randomCocktail1.idDrink}
                            number="1"
                            drink={randomCocktail1}
                        />
                        }
                    </div>
                    <div className="col-1-of-2">
                        {isLoading ? 
                        <LoadingSpinner isLoading={isLoading} /> 
                        : 
                        <RandomDrinkCard 
                            drinkId={randomCocktail2.idDrink}
                            number="2"
                            drink={randomCocktail2}
                        />
                        }
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default HomePage;