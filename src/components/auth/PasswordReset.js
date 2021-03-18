import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { auth } from "../../Firebase";

const PasswordReset = () => {
    const [email, setEmail] = useState("");
    const [emailHasBeenSent, setEmailHasBeenSent] = useState();
    const [error, setError] = useState(null);

    const onChangeHandler = e => {
        const { name, value } = e.target;

        if (name === "userEmail") {
            setEmail(value);
        }
    };

    const sendResetEmail = e => {
        e.preventDefault();
        auth
            .sendPasswordResetEmail(email)
            .then(() => {
                setEmailHasBeenSent(true);
                setTimeout(() => {setEmailHasBeenSent(false)}, 3000);
            })
            .catch(() => {
                setError("Error resetting password");
            });
    };

    return (
        <>
            <div className="uk-card uk-card-small uk-card-default uk-card-body uk-box-shadow-small">
                <h3 className="uk-card-title uk-margin-small-bottom search__title">Password Reset</h3>
                <form>
                    <div className="uk-child-width-1-1 uk-child-width-expand@s" data-uk-grid>
                        <div></div>
                        <div>
                            {emailHasBeenSent && (
                                <p>An email has been sent to you!</p>
                            )}
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
                            <div className="uk-margin-top uk-margin-bottom">
                                <button 
                                    className="uk-button uk-button-primary uk-width-1-1 search__form--button"
                                    type="submit"
                                    onClick={(e) => sendResetEmail(e)}
                                >
                                    Send Reset Link
                                </button>
                            </div>
                            <Link to="/login">
                                &larr; Back to Sign In Page
                            </Link>
                        </div>
                        <div></div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default PasswordReset;