import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const DrinkCard = ({ drink }) => {
    
    return (
        <>
            <Link 
                to={`/search/${drink.idDrink}`}
                className="uk-card uk-card-default uk-card-small uk-grid-collapse uk-card-hover uk-child-width-1-2@s uk-margin"
                data-uk-grid
            >
                <div className="uk-card-media-left uk-cover-container uk-width-2-5">
                    <img 
                        src={drink.strDrinkThumb}
                        alt={drink.strDrink}
                        data-uk-cover
                        data-uk-img=""
                    />
                    <canvas width="400" height="600"></canvas>
                </div>
                <div className="uk-card-body uk-width-1-5">&nbsp;</div>
                <div className="uk-card-body uk-width-2-5">
                    <h3 className="uk-card-title uk-margin-remove">{drink.strDrink}</h3>
                </div>
            </Link>
        </>
    )
}

export default DrinkCard;