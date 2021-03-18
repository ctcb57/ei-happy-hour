import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import ErrorMessage from "../ErrorMessage";
import { signInWithGoogle, auth } from "../../Firebase";

const LoginSection = ({ handleChange }) => {
    let history = useHistory();
    const [localEmail, setLocalEmail] = useState("");
    const [localPassword, setLocalPassword] = useState("");
    const [isError, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const signInWithEmailAndPasswordHandler = (event, email, password) => {
        setError(false)
        setErrorMessage("")
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then((response) => {
            console.log(response)
            history.push("/")
        })
        .catch(error => {
            setError(true);
            setErrorMessage("Error logging in.  Try again or re-register.")
            setLocalEmail("")
            setLocalPassword("")
            console.error("Error signing in with password and email", error);
          });
        }

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(false);
        setErrorMessage("");
        if (!localEmail.length || !localPassword.length) {
            setError(true);
            setErrorMessage("You must enter both an email and password.")
        }
        handleChange(localEmail, localPassword);
        signInWithEmailAndPasswordHandler(e, localEmail, localPassword)
    }

    const googleLogIn = (e) => {
        e.preventDefault();
        signInWithGoogle()
        history.push("/")
    }

    return (
        <>
            <div className="uk-child-width-1-1 uk-child-width-expand@s" data-uk-grid>
                <div>
                    <h3 className="uk-card-title login__info-header">
                        Expert Institute Happy Hour
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
                        <br/>
                        <div>
                            <button 
                                className="uk-button uk-button-primary uk-width-1-1 search__form--button"
                                type="submit"
                                onClick={(e) => signInWithEmailAndPasswordHandler(e, localEmail, localPassword)}
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
                                onClick={(e) => googleLogIn(e)}
                            >
                                Log In With Google
                            </button>
                        </div>
                    </div>
                    <hr/>
                    <div className="uk-grid-small uk-child-width-expand@s" data-uk-grid>
                        <div>
                            <p>Don't have an account? </p>
                            <span>
                                <a href="/signup">Sign up Here!</a>
                            </span>
                        </div>
                        <div>
                            <p>Forgot your password?</p>
                            <span>
                                <a href="/password-reset">Click Here!</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginSection;