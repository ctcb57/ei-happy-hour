import React from 'react';

const RandomDrinkCard = ({drinkId, drink, number}) => {
    return (
        <>
            <div className="card">
                <div className="card__side card__side--front">
                    <div className="card__picture">
                        <img 
                            src={drink.strDrinkThumb}
                            alt={drink.strDrink}
                            data-uk-img=""
                        />
                    </div>
                    <h4 className="card__heading">
                        <span className={`card__heading-span card__heading-span--${number}`}>
                            {drink.strDrink}
                        </span>
                    </h4>
                </div>
                <div className="card__side card__side--back card__side--back-1">
                    <div className="card__cta">
                        <div className="card__detail-box">
                            <p className="card__detail-only">Category: {drink.strCategory}</p>
                            <p className="card__detail-only">{drink.strAlcoholic}</p>
                            <p className="card__detail-only">Glass: {drink.strGlass}</p>
                        </div>
                        <a href={`/search/${drinkId}`} className="btn btn--white">Details</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RandomDrinkCard;