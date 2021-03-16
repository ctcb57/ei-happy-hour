import React, { useEffect, useState } from 'react';

import { _getRandomCocktail } from "../api/cocktailDb";

import RandomDrinkCard from "../components/homePage/RandomDrinkCard";

import randomCocktailData  from "../data/RandomCocktail";

const HomePage = () => {
    const [randomCocktail, setRandomCocktail] = useState(randomCocktailData.drinks[0]);
    const barracudaIngredients = [
        "rum",
        "vodka",
        "orange juice",
        "pineapple"
    ]

    const dryMartiniIngredients = [
        "Gin",
        "Dry Vermouth",
        "Olive"
    ]

    // useEffect(() => {
    //     _getRandomCocktail()
    //         .then((response) => {
    //             console.log(response);
    //         })
    //         .catch((err) => {})
    // })
    console.log(randomCocktail);
    
    return (
        <>
            <header className="header">
                <div className="header__logo-box">
                    <a href="">Home</a>
                </div>
                <div className="header__text-box">
                    <h1 className="heading-primary">
                        <span className="heading-primary--main">Expert Institute</span>
                        <span className="heading-primary--sub">Happy Hour</span>
                    </h1>

                    <a href="" className="btn btn--white btn--animated">Search Our Cocktails</a>
                </div>
            </header>

            <main className="main">
                <div className="row">
                    <div className="col-1-of-2">
                        <RandomDrinkCard 
                            name="Barracuda"
                            number="1"
                            ingredients={barracudaIngredients}
                            description="This is a really good drink"
                        />
                    </div>
                    <div className="col-1-of-2">
                        <RandomDrinkCard 
                            name="Old Fashioned"
                            number="2"
                            ingredients={dryMartiniIngredients}
                            description="This is another good drink"
                        />
                    </div>
                </div>
            </main>

            <footer className="footer">
                <div className="row">
                <div className="col-1-of-3">
                        <div className="footer__content">
                            <p>Our Favorites</p>
                        </div>
                    </div>
                    <div className="col-1-of-3">
                        <div className="footer__content">
                            <p>About Us</p>
                        </div>
                    </div>
                    <div className="col-1-of-3">
                        <div className="footer__content">
                            <p>Contact Us</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default HomePage;