import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import { generateUserDocument, auth } from "../../Firebase";

import ErrorMessage from "../ErrorMessage";

const SignUp = () => {
    let history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [error, setError] = useState(false);
    const [errorMessage ,setErrorMessage] = useState("");

    const createUserWithEmailAndPasswordHandler = async (event, email, password) => {
        event.preventDefault();
        try{
          const {user} = await auth.createUserWithEmailAndPassword(email, password);
          generateUserDocument(user, {displayName});
        }
        catch(error){
          setError(true);
          setErrorMessage("Error setting up user with email and password")
          return;
        }
    
        setEmail("");
        setPassword("");
        setDisplayName("");
        history.push("/")
    };

    const onChangeHandler = event => {
        const { name, value } = event.target;
        if (name === "userEmail") {
          setEmail(value);
        } else if (name === "userPassword") {
          setPassword(value);
        } else if (name === "displayName") {
          setDisplayName(value);
        }
    };

    return (
        <>
            <div className="uk-card uk-card-small uk-card-default uk-card-body uk-box-shadow-small">
                <h3 className="uk-card-title uk-margin-small-bottom search__title">Sign Up</h3>
                <form>
                    <div className="uk-child-width-1-1 uk-child-width-expand@s" data-uk-grid>
                        <div></div>
                        <div>
                            <div>
                                <label className="uk-form-label search__form--label">Display Name</label>
                                <input 
                                    name="displayName"
                                    id="name-sign-up"
                                    className="uk-input"
                                    type="text"
                                    value={displayName}
                                    onChange={(e) => onChangeHandler(e)}
                                />
                            </div>
                            <div className="uk-margin-top">
                                <label className="uk-form-label search__form--label">Email Address</label>
                                <input 
                                    name="userEmail"
                                    id="email-sign-up"
                                    className="uk-input"
                                    type="text"
                                    value={email}
                                    onChange={(e) => onChangeHandler(e)}
                                />
                            </div>
                            <div className="uk-margin-top">
                                <label className="uk-form-label search__form--label">Password</label>
                                <input 
                                    name="userPassword"
                                    id="password-sign-up"
                                    className="uk-input"
                                    type="password"
                                    value={password}
                                    onChange={(e) => onChangeHandler(e)}
                                />
                            </div>
                            <div className="uk-margin-top">
                                <ErrorMessage 
                                    isError={error}
                                    message={errorMessage}
                                />
                                <button 
                                    className="uk-button uk-button-primary uk-width-1-1 search__form--button"
                                    type="submit"
                                    onClick={(e) => createUserWithEmailAndPasswordHandler(e, email, password)}
                                >
                                    Sign Up
                                </button>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </form>
            </div>
            
        </>
    )
}

export default SignUp;
