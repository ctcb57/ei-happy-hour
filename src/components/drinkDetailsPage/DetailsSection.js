import React, { useState, useEffect } from "react"

const DrinkDetailsSection = ({ drink }) => {
    let videoUrl;
    if (drink.strVideo){
        videoUrl = drink.strVideo.replace("watch?", "embed/")
    }
    console.log(drink);
    let ingredients = [];
    let measurements = [];

    for (const [key, value] of Object.entries(drink)){
        if (key.includes("strIngredient") && value !== null){
            ingredients.push(value)
        }
        if (key.includes("strMeasure") && value !== null){
            measurements.push(value);
        }
    }

    return (
        <>
            <div className="uk-card uk-card-small uk-card-default uk-card-body uk-box-shadow-small uk-margin-top uk-margin-bottom">
                <h3 className="uk-card-title uk-margin-small-bottom search__title">
                    {drink.strDrink}
                </h3>
                <h5 className="details__sub-title">{drink.strAlcoholic} - {drink.strCategory}</h5>
                <hr/>
                <div className="uk-child-width-1-1 uk-child-width-expand@s" data-uk-grid>
                    <div>
                        {drink.strVideo ? 
                        <div>
                            <iframe
                                src={videoUrl}
                                title={drink.strDrink}
                                data-uk-video
                                data-uk-responsive
                            ></iframe>
                            <p>The video is here</p>
                        </div>
                        :
                        <div className="uk-cover-container">
                            <img 
                                src={drink.strDrinkThumb}
                                alt={drink.strDrink}
                                data-uk-cover
                                data-uk-img=""
                            />
                            <canvas width="600" height="600"></canvas>
                        </div>
                        }
                    </div>
                    <div>
                        <h5 className="details__sub-title">Recipe</h5>
                        <p className="uk-text-large uk-text-center">Glass: {drink.strGlass}</p>
                        <hr/>
                        <p className="uk-text-large uk-text-center">Ingredients</p>
                        <div className="uk-child-width-1-1 uk-child-width-expand@s" data-uk-grid>
                            <div>
                                <ul className="uk-list uk-list-striped">
                                    {ingredients.map((item, index) => (
                                        <li>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <ul className="uk-list uk-list-striped">
                                    {measurements.map((item, index) => (
                                        <li>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        
                        <p className="uk-text-large uk-text-center">Instructions</p>
                        <p>{drink.strInstructions}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DrinkDetailsSection;