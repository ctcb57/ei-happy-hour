import React, { useState, useContext } from 'react';
import { UserContext } from "../../providers/UserProvider";

const Navigation = () => {
    const user = useContext(UserContext);

    return (
        <>
            <div className="navigation">
                <input type="checkbox" className="navigation__checkbox" id="navi-toggle"/>

                <label for="navi-toggle" className="navigation__button">
                    <span className="navigation__icon">&nbsp;</span>
                </label>

                <div className="navigation__background">&nbsp;</div>

                <nav className="navigation__nav">
                    <ul className="navigation__list">
                        <li className="navigation__item">
                            <a href="/search" class="navigation__link"><span>01</span>Search Cocktails</a>
                        </li>
                        {user ? 
                        <li className="navigation__item"><a href="/logout" className="navigation__link">
                            <span>02</span>Log Out</a>
                        </li>
                        :
                        <li className="navigation__item"><a href="/login" class="navigation__link"><span>02</span>Sign In</a></li>
                        } 
                    </ul>
                </nav>
            </div>
        </>   
    )
}

export default Navigation;