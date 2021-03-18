import React from 'react';

const LoginSection = () => {

    return (
        <>
            <div className="uk-child-width-1-1 uk-child-width-expand@s" data-uk-grid>
                <div>
                    <h3 className="uk-card-title login__info-header">
                        EI Happy Hour
                    </h3>
                    <h5 className="login__info-sub-header">
                        Powered by Charles Clark
                    </h5>
                    <br/>
                    <p>Cocktail recipes brought to you.</p>
                    <p>Join the platform that provides industry leaders with delectable cocktail recipes.</p>
                </div>
                <div className="uk-card uk-card-small uk-card-default uk-card-body uk-box-shadow-small">
                    <h3 className="uk-card-title">Cocktail Enthusiast Sign In</h3>
                </div>
            </div>
        </>
    )
}

export default LoginSection;