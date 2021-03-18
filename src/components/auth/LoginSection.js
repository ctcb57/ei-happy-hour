import React, { useState } from 'react';

import ErrorMessage from "../ErrorMessage";
import { signInWithGoogle } from "../../Firebase";

const LoginSection = ({ email, password, handleChange }) => {
    const [localEmail, setLocalEmail] = useState(email);
    const [localPassword, setLocalPassword] = useState(password);
    const [isError, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const signInWithEmailAndPasswordHandler = (event, localEmail, password) => {
        event.preventDefault();
    }

    const onChangeHandler = (event) => {
        const { name, value } = event.currentTarget;

        if (name === 'userEmail'){
            setLocalEmail(value);
        }

        else if (name === 'userPassword') {
            setLocalPassword(value);
        }
    }

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
                        Exper Institute Happy Hour
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
                                onChange={(e) => onChangeHandler(e)}
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
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <ErrorMessage 
                            isError={isError}
                            message={errorMessage}
                        />
                        <br/>
                        <div>
                            <button 
                                className="uk-button uk-button-primary uk-width-1-1 search__form--button"
                                type="submit"
                                onClick={(e) => handleSubmit(e)}
                            >
                                Sign In 
                            </button>  
                        </div>
                    </form>
                    <br/>
                    <hr/>
                    <div className="uk-grid-small uk-child-width-expand@s" data-uk-grid>
                        <div>
                            <button 
                                type="submit"
                                className="uk-button uk-button-primary uk-width-1-1 search__form--button"
                                onClick={() => signInWithGoogle()}
                            >
                                Log In With Google
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginSection;