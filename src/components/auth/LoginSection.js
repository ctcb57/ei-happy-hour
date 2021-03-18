import React, { useState } from 'react';

import ErrorMessage from "../ErrorMessage";

const LoginSection = ({ email, password, handleChange }) => {
    const [localEmail, setLocalEmail] = useState(email);
    const [localPassword, setLocalPassword] = useState(password);
    const [isError, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(false);
        setErrorMessage("");
        if (!email.length || !password.length) {
            setError(true);
            setErrorMessage("You must enter both an email and password.")
        }
        handleChange(localEmail, localPassword);
    }

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
                    <h3 className="login__info-sub-header uk-margin-bottom">Cocktail Enthusiast Sign In</h3>
                    <form>
                        <div>
                            <label className="uk-form-label login__input-label uk-margin-top" htmlFor="email">
                                Email Address
                            </label>
                            <input 
                                id="email"
                                className="uk-input"
                                type="text"
                                value={localEmail}
                                onChange={(e) => setLocalEmail(e.target.value)}
                            />
                        </div>
                        <div className="uk-margin-top">
                            <label className="uk-form-label login__input-label uk-margin-top" htmlFor="password">
                                Password
                            </label>
                            <input 
                                id="password"
                                className="uk-input"
                                type="password"
                                value={localPassword}
                                onChange={(e) => setLocalPassword(e.target.value)}
                            />
                        </div>
                        <ErrorMessage 
                            isError={isError}
                            message={errorMessage}
                        />
                        <div>
                            <button 
                                className="btn btn-login btn--purple"
                                type="submit"
                                onClick={(e) => handleSubmit(e)}
                            >
                                Sign In 
                            </button>  
                        </div>
                    </form>
                    
                </div>
            </div>
        </>
    )
}

export default LoginSection;