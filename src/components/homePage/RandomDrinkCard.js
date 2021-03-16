import React from 'react';

const RandomDrinkCard = ({name, number, ingredients, description}) => {
    return (
        <>
            <div className="card">
                <div className="card__side card__side--front">
                    <div className={`card__picture card__picture--${number}`}>
                        &nbsp;
                    </div>
                    <h4 className="card__heading">
                        <span className={`card__heading-span card__heading-span--${number}`}>
                            {name}
                        </span>
                        <div className="card__details">
                            <ul>
                                {ingredients.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </h4>
                </div>
                <div className="card__side card__side--back card__side--back-1">
                    <div className="card__cta">
                        <div className="card__detail-box">
                            <p className="card__detail-only">{description}</p>
                        </div>
                        <a href="" className="btn btn--white">Details</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RandomDrinkCard;