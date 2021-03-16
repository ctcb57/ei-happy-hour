import React from 'react';

const RandomDrinkCard = () => {
    return (
        <>
            <div className="uk-card uk-card-default">
                <div className="uk-card-header">
                    <div className="main__random-card-box--title">Barracuda</div>
                </div>
                <div className="uk-card-body">
                    <p>Lorem ipsum sumsum</p>
                </div>
                <div className="main__random-card-box--image">
                    <img 
                        src="https:\/\/www.thecocktaildb.com\/images\/media\/drink\/jwmr1x1504372337.jpg" 
                        alt="random-card"
                        className="main__random-card-box--image"
                    />
                </div>
            </div>
        </>
    )
}

export default RandomDrinkCard;