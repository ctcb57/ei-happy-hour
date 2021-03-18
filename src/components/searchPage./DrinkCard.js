import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const DrinkCard = ({ drink }) => {
    let imageUrl = drink.strDrinkThumb + "/preview"

    console.log(imageUrl)

    return (
        <>
            <Link 
                to={`/search/${drink.idDrink}`}
                className="uk-card uk-card-default uk-card-small uk-grid-collapse uk-card-hover uk-child-width-1-2@s uk-margin"
                data-uk-grid
            >
                <div className="uk-cover-container uk-width-1-2">
                    <img 
                        src={imageUrl}
                        alt={drink.strDrink}
                        data-uk-img=""
                        height="100px"
                        width="100px"
                    />
                </div>
                <div className="uk-card-body uk-width-1-2">
                    <h3 className="uk-card-title uk-margin-remove">{drink.strDrink}</h3>
                </div>
            </Link>
        </>
    )
}

export default DrinkCard;