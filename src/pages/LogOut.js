import React, { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import { useHistory } from "react-router-dom";
import { logOut } from "../Firebase";

import Header from "../components/base/Header";
import Footer from "../components/base/Footer";

const LogOut = () => {
    let history = useHistory();

    const logOutApplication = () => {
        logOut()
        alert("Successfully logged out!")
        history.push('/')
    }

    return (
        <>
            <Header />
            <br/>
                <div className="uk-card uk-card-small uk-card-default uk-card-body uk-box-shadow-small">
                    <h3 className="uk-card-title uk-margin-small-bottom search__title">Log Out</h3>
                    <form>
                        <div className="uk-child-width-1-1 uk-child-width-expand@s" data-uk-grid>
                            <div></div>
                            <div>
                                <div className="uk-margin-top">
                                    <button 
                                        className="uk-button uk-button-primary uk-width-1-1 search__form--button"
                                        type="submit"
                                        onClick={() => logOutApplication()}
                                    >
                                        Click to log out
                                    </button>
                                </div>
                            </div>
                            <div></div>
                        </div>
                    </form>
                </div>
            <br/>
            <Footer />
        </>
    )
}

export default LogOut;